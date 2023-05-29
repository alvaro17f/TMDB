import { useEffect, useState } from "react";

// type RootObject = {
//   page: number;
//   results: Result[];
//   total_pages: number;
//   total_results: number;
// }

type Results = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}[];

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
  import.meta.env.VITE_API_KEY
}`;
const IMG_URL = "https://image.tmdb.org/t/p/original";

export const GetPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Results>();

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((movies) => setPopularMovies(movies.results));
  }, []);

  return (
    <section className="grid md:grid-cols-4 place-items-center gap-5 m-10">
      {popularMovies?.map((movie) => (
        <div id={String(movie.id)} className="border rounded-xl w-56 h-[30rem]">
          <img src={IMG_URL + movie.poster_path} alt={movie.title} />
          <div className="p-5 relative h-32">
            <h1 className="text-lg max-w-[200px] text-center">{movie.title}</h1>
            <p className="text-xs text-center text-slate-700 absolute bottom-0">{`Fecha de Lanzamiento: ${new Date(
              movie.release_date,
            ).toLocaleDateString()}`}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
