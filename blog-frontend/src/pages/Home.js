import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from your API
    fetch(`/api/posts`)
      .then((response) => response.json())
      .then((data) => setBlogs(data?.data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);
console.log("Home.js");

  return (

    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest Blogs</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
