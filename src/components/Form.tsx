import { ChangeEvent, FormEvent, useState } from "react";

export const Form = () => {
  const [rating, setRating] = useState(5);

  const handleRating = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="comments"
        placeholder="Comments..."
        id=""
        className="w-full h-32 p-5 border outline-none rounded-xl"
      />
      <div className="grid grid-cols-2 p-5 place-items-center">
        <div>
          <input
            type="range"
            min={0}
            max={10}
            defaultValue={5}
            value={rating}
            onChange={handleRating}
          />
          <label htmlFor="rating" className="p-5">
            rating: {rating}
          </label>
        </div>
        <button type="submit" className="max-w-lg p-5 rounded-lg bg-slate-400">
          Submit
        </button>
      </div>
    </form>
  );
};
