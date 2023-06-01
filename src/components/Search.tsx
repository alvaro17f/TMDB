import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (query.length === 0) return e.preventDefault();
    e.preventDefault();
    navigate(`/search/${query}/1`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-row-reverse">
      <input
        type="search"
        placeholder="John Wick"
        className="flex-1 p-2 border rounded-xl focus:outline-none"
        value={query}
        onChange={handleSearch}
      />
      <button
        type="submit"
        className={
          query
            ? "text-white absolute p-[9px] bg-blue-400 rounded-xl outline-none"
            : "text-white absolute p-[9px] bg-slate-400 rounded-xl outline-none cursor-default"
        }
      >
        Search
      </button>
    </form>
  );
};
