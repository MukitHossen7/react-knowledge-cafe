import Bookmark from "../Bookmark/Bookmark";
import Times from "../Times/Times";

const Bookmarked = ({ bookmarks }) => {
  return (
    <div className="w-full md:w-4/12 pt-6">
      <Times></Times>
      <div className="bg-slate-100 rounded-xl p-6 mt-6">
        <h1 className="text-xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
        {/* <Bookmark></Bookmark> */}
      </div>
    </div>
  );
};

export default Bookmarked;
