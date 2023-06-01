import { useParams } from "react-router-dom";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { Form } from "../components/Form";

const IMG_URL = "https://image.tmdb.org/t/p/original";

export const MoviePage = () => {
  const params = useParams();
  const { data: movie, loading } = useFetchMovies(String(params.movieId));

  if (loading) return <div className="mt-5 text-5xl text-center">Loading ...</div>;
  return (
    <div className="grid grid-cols-[1fr_2fr] m-5">
      <div>
        <img
          src={IMG_URL + movie?.poster_path}
          alt={movie?.title}
          className="mb-5 w-96"
        />
      </div>
      <div className="grid">
        <h1 className="text-5xl">{movie?.title}</h1>
        <p className="absolute right-0 mr-12 text-xs">ID: {movie?.id}</p>
        <p>{`Release date: ${new Date(
          movie?.release_date as Date,
        ).toLocaleDateString()}`}</p>
        <p>{movie?.adult ? "Adults Only" : "Every Ages"}</p>
        <p>{`Votes: ${movie?.vote_count}`}</p>
        <p>{movie?.overview}</p>
        <Form />
      </div>
    </div>
  );
};