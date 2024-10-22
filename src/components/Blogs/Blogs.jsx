import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmark, handleTimer }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-full md:w-8/12 ">
      {blogs.map((blog, idx) => (
        <Blog
          key={idx}
          blog={blog}
          handleBookmark={handleBookmark}
          handleTimer={handleTimer}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
