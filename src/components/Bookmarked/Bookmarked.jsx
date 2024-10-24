import Bookmark from "../Bookmark/Bookmark";
import Times from "../Times/Times";

const Bookmarked = ({ bookmarks, times }) => {
  return (
    <div className="w-full md:w-4/12 pt-6">
      <Times times={times}></Times>
      <div className="bg-slate-100 rounded-xl p-6 mt-6">
        <h1 className="text-xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarked;
