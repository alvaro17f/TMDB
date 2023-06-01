import { ChangeEvent, FormEvent, useState } from "react";
import { useFetchRating } from "../hooks/useFetchRating";
import { useUserContext } from "../Providers/UserProvider";

export const Form = () => {
  const [rating, setRating] = useState(2.5);
  
  const { state } = useUserContext();

  const handleRating = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const { data, loading, request } = useFetchRating({ value: rating });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    request();
  };
  if (loading) return <div className="text-2xl text-center">LOADING...</div>;
  if (!state.guest_session_id) return <div className="text-2xl text-center">You must click on "😀 Get ID" first...</div>;
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
        <button type="submit" className="max-w-lg p-5 rounded-lg bg-slate-400">
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
