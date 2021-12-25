import React from "react";
import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { Provider } from "react-redux";
import store from "../app/store";
import { BrowserRouter } from "react-router-dom";

test("renders Sidebar", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Sidebar />
      </Provider>
    </BrowserRouter>
  );
  expect(getByTestId("sidebar")).toBeInTheDocument();
});