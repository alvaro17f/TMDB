import { SearchResults } from "../components/SearchResults";

export const SearchPage = () => {

  return (
    <section className="grid gap-5 m-10 md:grid-cols-4 place-items-center">
        <SearchResults />
    </section>
  );
};
