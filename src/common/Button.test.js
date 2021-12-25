import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("renders default button", () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId('default-button')).toBeInTheDocument();
});

test("renders plain button on passing plain in className", () => {
  const { getByTestId } = render(<Button className="plain" />);
  expect(getByTestId('plain-button')).toBeInTheDocument();
});
