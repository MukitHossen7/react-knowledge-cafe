import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div className="w-full md:w-8/12">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
