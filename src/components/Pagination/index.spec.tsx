import React from "react";
import { render, cleanup } from "@testing-library/react";
import Pagination from "./index";

describe("Pagination", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(<Pagination total={10} current={2} />);
    expect(container).toMatchSnapshot();
  });
});
