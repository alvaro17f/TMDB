import { useNavigate } from "react-router-dom";

export const Back = () => {
  const navigate = useNavigate();
    return (
      <div className="grid h-16 border-b-2 place-content-start">
        <button
          type="button"
          className="w-24 h-16 text-xl text-slate-600"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    );
};
