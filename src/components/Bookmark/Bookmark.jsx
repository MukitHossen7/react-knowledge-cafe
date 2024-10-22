const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white rounded-lg p-4 mt-4">
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
};

export default Bookmark;
