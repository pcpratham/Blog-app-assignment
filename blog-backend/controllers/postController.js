const Post = require('../models/postModel');
const asyncHandler = require('../utils/asyncHandler');
const ErrorResponse = require('../utils/errorHandler');

// @desc    Get all posts
// @route   GET /posts
// @access  Public
exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find().populate('author', 'username');
  res.status(200).json({ success: true, data: posts });
});

// @desc    Get single post
// @route   GET /posts/:id
// @access  Public
exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id).populate('author', 'username');
  if (!post) {
    return next(new ErrorResponse('Post not found', 404));
  }
  res.status(200).json({ success: true, data: post });
});

// @desc    Create new post
// @route   POST /posts
// @access  Private
exports.createPost = asyncHandler(async (req, res, next) => {
  req.body.author = req.user.id;
  const post = await Post.create(req.body);
  res.status(201).json({ success: true, data: post });
});

// @desc    Update post
// @route   PUT /posts/:id
// @access  Private
exports.updatePost = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.id);
  if (!post) {
    return next(new ErrorResponse('Post not found', 404));
  }

  if (post.author.toString() !== req.user.id) {
    return next(new ErrorResponse('Not authorized to update this post', 401));
  }

  post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: post });
});

// @desc    Delete post
// @route   DELETE /posts/:id
// @access  Private
exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(new ErrorResponse('Post not found', 404));
  }

  if (post.author.toString() !== req.user.id) {
    return next(new ErrorResponse('Not authorized to delete this post', 401));
  }

  await post.remove();

  res.status(200).json({ success: true, data: {} });
});
