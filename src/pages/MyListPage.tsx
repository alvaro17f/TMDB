import { Link } from "react-router-dom";
import { useFetchList } from "../hooks/useFetchList";

const IMG_URL = "https://image.tmdb.org/t/p/original";

export const MyListPage = () => {
  const { data, loading } = useFetchList();

  if (loading) return <div className="mt-5 text-5xl text-center">Loading ...</div>;
  if (!data) return <div className="mt-5 text-5xl text-center">You must click on "😀 Get ID" first...</div>
  return (
    <section className="m-5">
      <h1 className="mb-5 text-5xl">MY LIST</h1>
      <table className="w-full border ">
        <thead className="h-10 text-left bg-slate-400">
          <th />
          <th>Title</th>
          <th>Vote Average</th>
          <th>Personal Rating</th>
        </thead>
        <tbody>
          {data?.map(({ rating, title, poster_path, vote_average, id }) => (
            <tr key={id} className="border">
              <Link to={`/movie/${id}`}>
                <td>
                  <img
                    src={IMG_URL + poster_path}
                    alt={title}
                    className="w-32"
                  />
                </td>
              </Link>
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
