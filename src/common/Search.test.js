import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import Search from "./Search";

test("renders Search", () => {
  const { getByTestId } = render(<Search />);
  expect(getByTestId("search")).toBeInTheDocument();
});

test("renders Search", () => {
  const { getByTestId } = render(<Search />);
  expect(getByTestId("search")).toBeInTheDocument();
});

test("sets the search query value on user input", async () => {
  let queryOutput = "";
  function queryChanged(query) {
    queryOutput = query;
  }
  const { getByTestId } = render(<Search queryChanged={queryChanged} />);
  fireEvent.change(getByTestId("search-input"), {target: {value: 'query'}})

  await wait(
    () => {
      expect(queryOutput).toEqual("query");
    },
    { timeout: 300 }
  );
});