import { useEffect, useState } from "react";
import { ListType } from "../types/types";

export const useFetchList = () => {
  //TODO:
  const guestId = "ca6c96ee6faea49df91fd2f1fd48ffed";

  const [data, setData] = useState<ListType>();
  const [loading, setLoading] = useState(false);

  const URL = `https://api.themoviedb.org/3/guest_session/${guestId}/rated/movies?api_key=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => setData(data.results))
      .finally(() => setLoading(false))
      .catch((err) => console.error(err));
  }, [URL]);

  return { data, loading };
};
