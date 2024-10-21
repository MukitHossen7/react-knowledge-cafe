import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarked from "./components/Bookmarked/Bookmarked";
import Headers from "./components/Headers/Headers";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Headers></Headers>
      <div className="flex flex-col md:flex-row gap-8 pt-6">
        <Blogs></Blogs>
        <Bookmarked></Bookmarked>
      </div>
    </div>
  );
}

export default App;
