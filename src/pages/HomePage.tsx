import { GetPopularMovies } from "../components/GetPopularMovies";

export const HomePage = () => {
  return (
    <section>
      <h1 className="grid place-items-center text-5xl p-5">TMDB</h1>
      <GetPopularMovies />
    </section>
  );
};
