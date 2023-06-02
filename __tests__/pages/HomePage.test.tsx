import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { HomePage } from "../../src/pages/HomePage";
import { server } from "../../src/mocks/server";
import { rest } from "msw";

const wrapper = (
  <MemoryRouter>
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>
  </MemoryRouter>
);
describe("<HomePage />", () => {
  beforeEach(() => {
    render(wrapper);
    afterEach(cleanup);
  });
  it("should match the snapshot", () => {
    const { container } = render(wrapper);
    expect(container).toMatchSnapshot();
  });

  it("should render 'LOADING...'", () => {
    screen.getByText(/loading/i);
  });

  it("should render a a movie", async () => {
    await waitFor(() => {
      screen.getByText(/john wick/i);
    });
  });

  it("should error", async () => {
    server.use(
      rest.get(
        "https://api.themoviedb.org/3/movie/popular",
        (_req, res, ctx) => {
          return res(ctx.status(500));
        },
      ),
    );
    render(<HomePage />);

    await waitFor(() => {
      screen.getByText(/error while fetching popular movies/i);
    });
  });
});
