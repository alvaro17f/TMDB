import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="flex items-center h-20 pl-5 mb-10 shadow-md">
      <div className="text-5xl text-slate-400">
        <Link to="/">TMDB</Link>
      </div>
      <div className="flex items-baseline gap-5 m-auto mr-5 text-gray-800">
        <Link to="/mylist">⭐ List</Link>
      <Search />
      </div>
    </header>
  );
};
