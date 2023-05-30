import { Link } from "react-router-dom";
import { useFetchSearch } from "../hooks/useFetchSearch";

const IMG_URL = "https://image.tmdb.org/t/p/original";

export const SearchResults = () => {
  const { data, loading } = useFetchSearch();

  return loading ? (
    <div className="text-5xl text-center">Loading ...</div>
  ) : (
    <>
      {data?.map((movie) => (
        <Link
          id={String(movie.id)}
          to={`/movie/${movie.id}`}
          className="border rounded-xl w-56 h-[30rem]"
        >
          <img src={IMG_URL + movie.poster_path} alt={movie.title} />
          <div className="relative h-32 p-5">
            <h1 className="text-lg max-w-[200px] text-center">{movie.title}</h1>
            <p className="absolute bottom-0 text-xs text-center text-slate-700">{`Release date: ${new Date(
              movie.release_date,
            ).toLocaleDateString()}`}</p>
          </div>
        </Link>
      ))}
    </>
  );
};
