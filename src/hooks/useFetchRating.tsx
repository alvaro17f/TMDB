import { useState } from "react";
import { RatingProps, RatingType } from "../types/types";
import { useParams } from "react-router-dom";

export const useFetchRating = ({ value }: RatingProps) => {
  //TODO:
  const guestId = "ca6c96ee6faea49df91fd2f1fd48ffed";

  const [data, setData] = useState<RatingType>();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const URL = `https://api.themoviedb.org/3/movie/${
    params.movieId
  }/rating?guest_session_id=${guestId}&api_key=${import.meta.env.VITE_API_KEY}`;

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: `{"value": ${value}}`,
  };
  const request = () => {
    setLoading(true);
    fetch(URL, options)
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false))
      .catch((err) => console.error(err));
  };

  return { data, loading, request };
};
