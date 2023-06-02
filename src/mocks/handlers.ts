import { rest } from "msw";
import Popular from "./responses/Popular.json";
import Guest from "./responses/Guest.json";
import List from "./responses/List.json";
import Rating from "./responses/Rating.json";
import Search from "./responses/Search.json";
import ID from "./responses/ID.json";

export const handlers = [
  rest.get("https://api.themoviedb.org/3/movie/popular", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Popular));
  }),

  rest.get(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(Guest));
    },
  ),

  rest.get(
    "https://api.themoviedb.org/3/guest_session/undefined/rated/movies",
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(List));
    },
  ),

  rest.get("https://api.themoviedb.org/3/search/movie", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Search));
  }),

  rest.get("https://api.themoviedb.org/3/movie/385687", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ID));
  }),

  rest.post(
    "https://api.themoviedb.org/3/movie/385687/rating",
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(Rating));
    },
  ),

  rest.get(
    "https://api.themoviedb.org/3/guest_session/ca6c96ee6faea49df91fd2f1fd48ffed/rated/movies",
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(List));
    },
  ),
];
