const Times = ({ times }) => {
  return (
    <div>
      <div className="border border-[rgba(96,71,236,0.4)] rounded-xl bg-[rgba(96,71,236,0.1)]">
        <h2 className="text-[#6047EC] font-bold text-2xl py-5 text-center">
          Spent time on read : {times} min
        </h2>
      </div>
    </div>
  );
};

export default Times;
