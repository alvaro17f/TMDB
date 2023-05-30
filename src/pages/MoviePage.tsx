import { useParams } from "react-router-dom";
import { MovieDetail } from "../components/MovieDetail";

export const MoviePage = () => {
  const params = useParams();

  return (
    <section className="m-5">
      <MovieDetail id={String(params.movieId)} />
    </section>
  );
};
