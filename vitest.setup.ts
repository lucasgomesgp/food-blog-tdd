import "whatwg-fetch"
import "@testing-library/jest-dom/vitest"

import { afterAll, afterEach, beforeAll } from 'vitest'

import { server } from "./src/mocks/server";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());