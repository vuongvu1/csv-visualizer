import React from "react";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";
import SearchBar from "./index";

describe("SearchBar", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(<SearchBar />);
    expect(container).toMatchSnapshot();
  });

  test("should trigger onSearch handler when press [Enter]", () => {
    const onSearchMock = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={onSearchMock} />);

    const searchInput = getByTestId("searchInputId");
    fireEvent.change(searchInput, {
      target: { value: "keyword" },
    });
    fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });

    wait(() => {
      expect(onSearchMock).toHaveBeenCalledWith("keyword");
    }, 0);
  });

  test("should trigger onSearch handler when click search icon", () => {
    const onSearchMock = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={onSearchMock} />);

    fireEvent.change(getByTestId("searchInputId"), {
      target: { value: "keyword" },
    });
    fireEvent.click(getByTestId("searchIconId"));

    wait(() => {
      expect(onSearchMock).toHaveBeenCalledWith("keyword");
    }, 0);
  });
});
