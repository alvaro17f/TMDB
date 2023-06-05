import { ChangeEvent, FormEvent, useState } from "react";
import { useFetchRating } from "../hooks/useFetchRating";
import { useUserContext } from "../providers/UserProvider";
import { useFetchGuest } from "../hooks/useFetchGuest";

export const Form = () => {
  const [rating, setRating] = useState(2.5);

  const { state } = useUserContext();
  const { request: getId } = useFetchGuest();
  const { data, loading, request } = useFetchRating({ value: rating });

  const handleRating = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    getId();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    request();
  };
  if (loading) return <div className="text-2xl text-center">LOADING...</div>;
  if (!state?.guest_session_id)
    return (
      <div className="text-2xl text-center">
        You must click on{" "}
        <button
          type="button"
          className="p-2 border rounded-xl border-slate-400 bg-slate-300"
          onClick={handleClick}
          aria-label="get-id-form"
        >
          😀 Get ID{" "}
        </button>{" "}
        to rate...
      </div>
    );
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 p-5 place-items-center">
        <div>
          <input
            type="range"
            min={0.5}
            max={5}
            step={0.5}
            value={rating}
            onChange={handleRating}
          />
          <label htmlFor="rating" className="p-5">
            rating: {rating * 2}
          </label>
        </div>
        <button
          type="submit"
          className="max-w-lg p-3 text-xl text-white rounded-lg bg-slate-400 hover:bg-blue-400"
        >
          Submit
        </button>
      </div>
      {data && (
        <div className="grid p-5 border border-slate-400 rounded-xl w-fit place-items-center">
          {data?.status_message}
        </div>
      )}
    </form>
  );
};
