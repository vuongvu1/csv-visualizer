import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Pagination, { PageSize } from "./index";

describe("Pagination", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = render(
      <Pagination total={10} current={2} pageSize={PageSize.MEDIUM} />
    );
    expect(container).toMatchSnapshot();
  });

  // TODO: Add similar tests for other page change buttons
  test("should trigger onChangePage handler", () => {
    const onChangePageMock = jest.fn();
    const { getByTestId } = render(<Pagination total={10} current={2} />);

    const firstBtn = getByTestId("firstBtnId");
    fireEvent.click(firstBtn);

    expect(onChangePageMock).toMatchSnapshot(1);
  });

  // TODO: Add similar tests for other page size change buttons
  test("should trigger onChangePageSize handler", () => {
    const onChangePageSizeMock = jest.fn();
    const { getByTestId } = render(
      <Pagination total={10} current={2} pageSize={PageSize.MEDIUM} />
    );

    const pageSizeSmallBtn = getByTestId(`pageSize${PageSize.SMALL}BtnId`);
    fireEvent.click(pageSizeSmallBtn);

    expect(onChangePageSizeMock).toMatchSnapshot(PageSize.SMALL);
  });
});
