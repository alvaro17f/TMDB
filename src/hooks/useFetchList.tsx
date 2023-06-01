import { useEffect, useState } from "react";
import { ListType } from "../types/types";
import { useUserContext } from "../Providers/UserProvider";

export const useFetchList = () => {
  const [data, setData] = useState<ListType>();
  const [loading, setLoading] = useState(false);
  
  const { state } = useUserContext();
  const guest_session_id = state?.guest_session_id;

  const URL = `https://api.themoviedb.org/3/guest_session/${guest_session_id}/rated/movies?api_key=${
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
