import { Link } from "react-router-dom";
import { useFetchPopular } from "../hooks/useFetchPopular";

const IMG_URL = "https://image.tmdb.org/t/p/original";

export const HomePage = () => {
  const { data, loading } = useFetchPopular();

  if (loading) return <div className="text-5xl text-center">Loading ...</div>;
  return (
    <section className="grid gap-5 m-10 md:grid-cols-4 place-items-center">
      {data?.map((movie) => (
        <Link
          key={String(movie.id)}
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
    </section>
  );
};