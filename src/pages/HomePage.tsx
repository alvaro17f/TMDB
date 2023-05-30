import { PopularMovies } from "../components/PopularMovies";

export const HomePage = () => {
  return (
    <section className="grid md:grid-cols-4 place-items-center gap-5 m-10">
      <PopularMovies />
    </section>
  );
};
