import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";

export const Paginator = ({ results = 0 }: { results?: number }) => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <>
      <ReactPaginate
        previousLabel="<"
        breakLabel="..."
        nextLabel=">"
        pageCount={results}
        onClick={(clickEvent) => {
          navigate(
            `/search/${params.searchQuery}/${
              clickEvent.nextSelectedPage
                ? String(Number(clickEvent.nextSelectedPage) + 1)
                : "1"
            }`,
          );
        }}
        forcePage={Number(params.page) - 1}
        className={
          results <= 1
            ? "hidden"
            : "grid grid-flow-col items-baseline place-content-center mb-8"
        }
        pageLinkClassName="text-black border border-slate-400  p-3 rounded-xl mx-1"
        activeLinkClassName="bg-slate-400 p-3 rounded-xl"
        nextClassName={
          Number(params.page) === results
            ? "hidden"
            : "border p-3 rounded-xl whitespace-nowrap border-slate-400"
        }
        previousClassName={
          Number(params.page) <= 1
            ? "hidden"
            : "border p-3 rounded-xl whitespace-nowrap  border-slate-400"
        }
      />
    </>
  );
};
