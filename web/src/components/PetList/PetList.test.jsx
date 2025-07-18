import React from "react";
import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { server } from "../../mocks/server";
import PetList from "./PetList";

test("renders title", () => {
  const { getByRole } = render(<PetList />);

  expect(getByRole("heading")).toHaveTextContent("My Pets");
});

test("renders pet list from API", async () => {
  render(<PetList />);

  const petItems = await screen.findAllByRole("listitem");
  expect(petItems.length).toBeGreaterThan(0);
});

test("shows placeholder when no pets", async () => {
  server.use(http.get("/api/pets", () => HttpResponse.json([])));
  render(<PetList />);

  expect(await screen.findByText(/Pets will appear here/)).toBeInTheDocument();
});
