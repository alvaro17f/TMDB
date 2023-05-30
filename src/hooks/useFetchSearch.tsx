import { useEffect, useState } from "react";
import { SearchType } from "../types/types";
import { useParams } from "react-router-dom";

export const useFetchSearch = () => {
  const params = useParams();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<SearchType>([]);
  const [loading, setLoading] = useState(true);
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&query=${params.searchQuery}&page=${page}`;

  useEffect(() => {
    setLoading(true);
    fetch(URL + params.searchQuery)
      .then((resp) => resp.json())
      .then((data) => setData(data.results))
      .finally(() => setLoading(false));
  }, [page, URL]);

  return { data, loading };
};
