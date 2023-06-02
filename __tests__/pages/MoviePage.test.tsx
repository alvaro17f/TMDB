import React from "react";
import {
  render,
  screen,
  cleanup,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { HomePage } from "../../src/pages/HomePage";
import { MoviePage } from "../../src/pages/MoviePage";
import { server } from "../../src/mocks/server";
import { rest } from "msw";
import { UserProvider } from "../../src/Providers/UserProvider";

const wrapper = (
  <UserProvider>
    <MemoryRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/movie/:movieId" Component={MoviePage} />
      </Routes>
    </MemoryRouter>
  </UserProvider>
);
describe("<MoviePage />", () => {
  beforeEach(async () => {
    render(wrapper);
    await waitFor(() => {
      fireEvent.click(screen.getByText(/fast x/i));
    });
    afterEach(cleanup);
  });
  it("should match the snapshot", () => {
    const { container } = render(wrapper);
    expect(container).toMatchSnapshot();
  });

  it("should render a a movie", async () => {
    await waitFor(() => {
      screen.getByText(/fast x/i);
    });
  });

  it("should error", async () => {
    server.use(
      rest.get("https://api.themoviedb.org/3/movie/*", (_req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );
    render(<MoviePage />);

    await waitFor(() => {
      screen.getByText(/error while fetching movie/i);
    });
  });

  it("should render Form component", async () => {
    screen.getByText(/you must click/i);
    fireEvent.click(screen.getByLabelText(/get-id-form/i));
    await waitFor(() => {
      screen.getByText(/rating/i);
      screen.getByRole("button", { name: /submit/i });
      fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    });
    screen.getByText(/success/i);
  });
});
