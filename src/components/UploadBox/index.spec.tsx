import React from "react";
import { render, cleanup } from "@testing-library/react";
import UploadBox from "./index";

describe("UploadBox", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(<UploadBox />);

    expect(container).toMatchSnapshot();
  });
});
