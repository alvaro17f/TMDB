import { useState } from "react";
import { useUserContext } from "../Providers/UserProvider";
import { setLocalStorage } from "../utils/localStorage";

export const useFetchGuest = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useUserContext();

  const URL = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${
    import.meta.env.VITE_API_KEY
  }`;

  const request = () => {
    setLoading(true);
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch?.({
          type: "CREATE_GUEST_SESSION",
          payload: data,
        });
        setLocalStorage(
          "guest_session_id",
          data,
          new Date(data.expires_at).getTime(),
        );
      })
      .finally(() => setLoading(false))
      .catch((err) => console.error(err));
  };

  return { loading, request };
};
