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
import { MyListPage } from "../../src/pages/MyListPage";
import { MoviePage } from "../../src/pages/MoviePage";
import { server } from "../../src/mocks/server";
import { rest } from "msw";
import { UserProvider } from "../../src/Providers/UserProvider";

const wrapper = (
  <UserProvider>
    <MemoryRouter>
      <Routes>
        <Route path="/" Component={MyListPage} />
        <Route path="/movie/:movieId" Component={MoviePage} />
      </Routes>
    </MemoryRouter>
  </UserProvider>
);
describe("<MyListPage />", () => {
  beforeEach(async () => {
    render(wrapper);
    afterEach(cleanup);
  });
  it("should match the snapshot", () => {
    const { container } = render(wrapper);
    expect(container).toMatchSnapshot();
  });

  it("should render", async () => {
    screen.getByText(/loading.../i);
    await waitFor(() => {
      screen.getByText(/you must click/i);
      fireEvent.click(screen.getByLabelText(/get-id-list/i));
    });
    screen.getByText(/title/i);
    screen.getByText(/vote average/i);
    screen.getByText(/personal rating/i);
    screen.getByText(/fast x/i);
    screen.getByText(/super mario/i);
    fireEvent.click(screen.getByText(/fast x/i));
    screen.getByText(/loading/i);
    await screen.findByText(/id: 385687/i);
  });

  // it("should error", async () => {
  //   server.use(
  //     rest.get("https://api.themoviedb.org/3/movie/*", (_req, res, ctx) => {
  //       return res(ctx.status(500));
  //     }),
  //   );
  //   render(<MoviePage />);

  //   await waitFor(() => {
  //     screen.getByText(/error while fetching movie/i);
  //   });
  // });

  // it("should render Form component", async () => {
  //   screen.getByText(/you must click/i);
  //   fireEvent.click(screen.getByLabelText(/get-id-form/i));
  //   await waitFor(() => {
  //     screen.getByText(/rating/i);
  //     screen.getByRole("button", { name: /submit/i });
  //     fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  //   });
  //   screen.getByText(/success/i);
  // });
});
