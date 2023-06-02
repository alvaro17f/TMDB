import { server } from "../src/mocks/server";
import { beforeAll, afterEach, afterAll } from "vitest";
import "@testing-library/jest-dom";
import "whatwg-fetch";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
