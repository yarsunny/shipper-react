import React from "react";
import { render } from "@testing-library/react";
import SidebarLink from "./SidebarLink";
import { Provider } from "react-redux";
import store from "../app/store";
import { BrowserRouter } from "react-router-dom";

test("renders SidebarLink", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Provider store={store}>
        <SidebarLink />
      </Provider>
    </BrowserRouter>
  );
  expect(getByTestId("sidebar-link")).toBeInTheDocument();
});
