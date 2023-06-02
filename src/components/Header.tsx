import { Link } from "react-router-dom";
import { Search } from "./Search";
import { useFetchGuest } from "../hooks/useFetchGuest";
import { useUserContext } from "../Providers/UserProvider";

export const Header = () => {
  const { state } = useUserContext();
  const { request, error } = useFetchGuest();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    request();
  };
  return (
    <header className="flex items-center h-20 pl-5 shadow-md">
      <div className="text-5xl text-slate-400">
        <Link to="/">TMDB</Link>
      </div>
      <div className="flex items-baseline gap-5 m-auto mr-5 text-gray-800">
        {state?.guest_session_id ? (
          <p>
            Expires at:{" "}
            {new Date(state.expires_at as Date).toLocaleDateString()}
          </p>
        ) : error ? (
          <button type="button" onClick={handleClick}>
            Error getting an ID
          </button>
        ) : (
          <button type="button" onClick={handleClick}>
            😀 Get ID
          </button>
        )}
        <Link to="/mylist">⭐ List</Link>
        <Search />
      </div>
    </header>
  );
};
