import React from "react";
import { render, cleanup } from "@testing-library/react";
import Layout from "./index";

describe("Layout", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
