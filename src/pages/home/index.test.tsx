import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "./index";

describe("Home page", () => {
  beforeEach(cleanup);

  test("renders learn react link", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
