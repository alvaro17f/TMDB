import { useEffect, useState } from "react";
import { MovieDetailType } from "../types/types";

export const useFetchMovies = (id: string) => {
  const [data, setData] = useState<MovieDetailType>();
  const [loading, setLoading] = useState(true);

  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((resp) => resp.json())
      .then((movies) => setData(movies))
      .finally(() => setLoading(false));
  }, [URL]);

  return { data, loading };
};
