import { useEffect, useState } from "react";
import { PopularType } from "../types/types";

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
  import.meta.env.VITE_API_KEY
}`;

export const useFetchPopular = () => {
  const [data, setData] = useState<PopularType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((resp) => resp.json())
      .then((movies) => setData(movies.results))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
