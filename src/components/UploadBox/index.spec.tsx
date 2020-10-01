import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import UploadBox from "./index";

describe("UploadBox", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(<UploadBox />);

    expect(container).toMatchSnapshot();
  });

  test("should trigger onChange handler", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<UploadBox onChange={onChangeMock} />);
    fireEvent.change(getByTestId("fileId"), { target: { files: ["file"] } });

    expect(onChangeMock).toHaveBeenCalledWith("file");
  });
});
