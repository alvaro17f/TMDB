import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/HomePage";
import { MoviePage } from "../pages/MoviePage";
import { SearchPage } from "../pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:movieId",
        element: <MoviePage />,
      },
      {
        path: "/search/:searchQuery",
        element: <SearchPage />,
      },
    ],
  },
]);
