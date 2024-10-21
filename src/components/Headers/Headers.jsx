import profile from "../../assets/images/profile.png";
const Headers = () => {
  return (
    <div className="border-b pt-3">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className=" text-xl lg:text-3xl font-bold">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={profile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
