import { useFetchMovies } from "../hooks/useFetchMovies";
import { Form } from "./Form";

const IMG_URL = "https://image.tmdb.org/t/p/original";

export const MovieDetail = ({ id }: { id: string }) => {
  const { data: movie, loading } = useFetchMovies(String(id));

  return loading ? (
    <div className="grid text-5xl place-content-center">Loading...</div>
  ) : (
    <div className="grid grid-cols-[1fr_2fr]">
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
