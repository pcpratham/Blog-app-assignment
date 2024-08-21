import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <div key={blog._id} className="border p-4 rounded">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="text-gray-700">{blog.content.substring(0, 100) + '...'}</p>
          <Link to={`/blog/${blog._id}`} className="text-blue-500">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
