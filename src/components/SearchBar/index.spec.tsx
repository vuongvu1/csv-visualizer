import React from "react";
import { render, cleanup } from "@testing-library/react";
import SearchBar from "./index";

describe("SearchBar", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(<SearchBar />);
    expect(container).toMatchSnapshot();
  });
});
