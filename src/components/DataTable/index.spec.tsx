import React from "react";
import { render, cleanup } from "@testing-library/react";
import DataTable from "./index";

describe("DataTable", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(<DataTable data={[]} />);
    expect(container).toMatchSnapshot();
  });
});
