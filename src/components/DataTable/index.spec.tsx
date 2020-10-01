import React from "react";
import { render, cleanup } from "@testing-library/react";
import DataTable from "./index";

describe("DataTable", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const dataRows = [
      ["header1", "header2", "header3", "header4", "header5"],
      ["data1", "data2", "data3", "data4", "data5"],
    ];
    const { container } = render(<DataTable data={dataRows} />);
    expect(container).toMatchSnapshot();
  });

  test("should return 'no data' text when data is empty", () => {
    const { container } = render(<DataTable data={[]} />);

    expect(container.textContent).toBe("No data to display.");
    expect(container).toMatchSnapshot();
  });
});
