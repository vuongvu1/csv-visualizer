import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
