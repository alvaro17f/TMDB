import React from "react";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Header } from "../../src/components/Header";
import { MyListPage } from "../../src/pages/MyListPage";
import { SearchPage } from "../../src/pages/SearchPage";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { UserProvider } from "../../src/Providers/UserProvider";
import { server } from "../../src/mocks/server";
import { rest } from "msw";

const wrapper = (
  <UserProvider>
    <MemoryRouter>
      <Routes>
        <Route path="/" Component={Header} />
        <Route path="/mylist" Component={MyListPage} />
        <Route path="/search/:searchQuery/:page" Component={SearchPage} />
      </Routes>
    </MemoryRouter>
  </UserProvider>
);
describe("<Header />", () => {
  beforeEach(() => {
    render(wrapper);
    afterEach(cleanup);
  });
  it("should match the snapshot", () => {
    const { container } = render(wrapper);
    expect(container).toMatchSnapshot();
  });

  it("should render LOGO", () => {
    screen.getByText(/tmdb/i);
  });

  it("should render GET ID button", () => {
    screen.getByText(/get id/i);
  });

  it("should render 'Expires at...' after click", async () => {
    fireEvent.click(screen.getByRole("button", { name: /get id/i }));
    fireEvent.click(screen.getByText(/get id/i));

    await waitFor(() => {
      screen.getByText(/expires at: /i);
    });
  });

  it("should render List button", () => {
    screen.getByText(/list/i);
  });

  it("should navigate to /mylist after clicking on List button", async () => {
    fireEvent.click(screen.getByText(/list/i));
    await waitFor(() => {
      screen.getByText(/get id/i);
    });
  });

  it("should render search component", async () => {
    screen.getByPlaceholderText(/john wick/i);
    screen.getByRole("button", { name: /search/i });
    screen.getByRole("searchbox");
    fireEvent.click(screen.getByText(/search/i));
    fireEvent.change(screen.getByRole("searchbox"), {
      target: { value: "break" },
    });
    fireEvent.click(screen.getByText(/search/i));
    screen.getByText(/loading.../i);
    await waitFor(() => {
      screen.getAllByText(/break/i);
    });
    fireEvent.click(screen.getByText(">"));
  });
});
