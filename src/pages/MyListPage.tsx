import { Link } from "react-router-dom";
import { useFetchList } from "../hooks/useFetchList";
import { useUserContext } from "../Providers/UserProvider";
import { useFetchGuest } from "../hooks/useFetchGuest";

const IMG_URL = "https://image.tmdb.org/t/p/original";

export const MyListPage = () => {
  const { data, loading } = useFetchList();
  const { request } = useFetchGuest();
  const { state } = useUserContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    request();
  };

  if (loading)
    return <div className="mt-5 text-5xl text-center">Loading ...</div>;
  if (!state?.guest_session_id)
    return (
      <div className="mt-5 text-2xl text-center ">
        You must click on{" "}
        <button
          type="button"
          className="p-2 border rounded-xl border-slate-400 bg-slate-300"
          onClick={handleClick}
          aria-label="get-id-list"
        >
          😀 Get ID{" "}
        </button>{" "}
        to see your list...
      </div>
    );
  return (
    <section className="m-5">
      <h1 className="mb-5 text-5xl">MY LIST</h1>
      <table className="w-full border ">
        <thead className="h-10 text-left bg-slate-400">
          <tr>
            <th />
            <th>Title</th>
            <th>Vote Average</th>
            <th>Personal Rating</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ rating, title, poster_path, vote_average, id }) => (
            <tr key={id} className="border">
              <td className="w-36">
                <Link to={`/movie/${id}`}>
                  <img
                    src={IMG_URL + poster_path}
                    alt={title}
                    className="w-32"
                  />
                </Link>
              </td>
              <td>
                <Link to={`/movie/${id}`}>{title}</Link>
              </td>
              <td>{vote_average.toPrecision(2)}</td>
              <td>{rating * 2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
