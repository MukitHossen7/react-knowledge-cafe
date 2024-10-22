import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarked from "./components/Bookmarked/Bookmarked";
import Headers from "./components/Headers/Headers";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [times, setTimes] = useState(0);

  const handleBookmark = (markBlog) => {
    const newBookMark = [...bookmarks, markBlog];
    setBookmarks(newBookMark);
    toast.success("Bookmark added Successful!", { autoClose: 1500 });
  };
  const handleTimer = (time, id) => {
    setTimes(times + time);

    const remainingBookMark = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMark);
    toast.success("Time added Successful!", { autoClose: 1500 });
  };
  return (
    <div className="w-11/12 mx-auto">
      <Headers></Headers>
      <div className="flex flex-col md:flex-row gap-8 ">
        <Blogs
          handleBookmark={handleBookmark}
          handleTimer={handleTimer}
        ></Blogs>
        <Bookmarked bookmarks={bookmarks} times={times}></Bookmarked>
        {/* {bookmarks.map((bookmark) => (
          <Bookmarked key={bookmark.id} bookmark={bookmark}></Bookmarked>
        ))} */}
        <ToastContainer />;
      </div>
    </div>
  );
}

export default App;
