const Blog = ({ blog }) => {
  const {
    cover,
    author_img,
    reading_time,
    author,
    posted_date,
    title,
    hashtags,
  } = blog;
  return (
    <div>
      <div>
        <div>
          <img
            src={cover}
            className="w-full h-auto object-cover rounded-lg"
          ></img>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-7">
          <div className="flex items-center gap-4">
            <img src={author_img} className="w-16"></img>
            <div>
              <h3 className="font-bold text-2xl">{author}</h3>
              <span className="text-xs text-slate-400">{posted_date}</span>
            </div>
          </div>
          <div>
            <span className="text-lg font-medium text-slate-400">
              {reading_time} min read
            </span>
          </div>
        </div>
        <h2 className="text-4xl font-bold pt-4">{title}</h2>
        <p className="pt-4 pb-5">
          {hashtags.map((hash, idx) => (
            <span
              key={idx}
              className="mr-3
             text-sm font-medium text-slate-600"
            >
              #{hash}
            </span>
          ))}
        </p>
        <span className="underline underline-offset-2 text-[#6047EC] font-medium text-lg">
          Mark as read
        </span>
      </div>
    </div>
  );
};

export default Blog;