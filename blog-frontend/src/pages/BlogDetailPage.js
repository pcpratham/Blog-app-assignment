import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data.data))
      .catch((error) => console.error('Error fetching blog:', error));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetailPage;
