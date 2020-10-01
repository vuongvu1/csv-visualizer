import React, { useCallback } from "react";
import SC from "./styles";

export enum PageSize {
  SMALL = 10,
  MEDIUM = 15,
  LARGE = 20,
}

interface Props {
  total: number;
  current: number;
  onChangePage?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    page: number
  ) => void;
  pageSize?: PageSize;
  onChangePageSize?: (page: number) => void;
}

// TODO: Improve this component to support page total less than 3
const Pagination: React.FC<Props> = ({
  total,
  current,
  onChangePage,
  pageSize,
  onChangePageSize,
}) => {
  const isFirst = current === 1;
  const isLast = current === total;

  /**
   * `firstPageNum`, `secondPageNum` and `lastPageNum` are 3 values shown in the
   * pagination, the logic here is a bit tricky when the total pages is 2
   */
  const firstPageNum = isFirst
    ? current
    : isLast && total !== 2
    ? current - 2
    : current - 1;
  const secondPageNum = isFirst
    ? 2
    : isLast && total !== 2
    ? total - 1
    : current;
  const lastPageNum = isFirst ? 3 : isLast ? total : current + 1;

  const handleClickOnPage = useCallback(
    (nextPage: number) => (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => onChangePage?.(event, nextPage),
    [onChangePage]
  );

  return (
    <SC.Container>
      <div>
        <SC.Button
          data-testid="firstBtnId"
          isFunctionKey
          disabled={isFirst}
          onClick={handleClickOnPage(1)}
        >
          First
        </SC.Button>
        <SC.Button
          isFunctionKey
          disabled={isFirst}
          onClick={handleClickOnPage(current - 1)}
        >
          Prev
        </SC.Button>
        <SC.Button
          active={current === firstPageNum}
          onClick={handleClickOnPage(firstPageNum)}
        >
          {firstPageNum}
        </SC.Button>
        {total > 1 && (
          <SC.Button
            active={current === secondPageNum}
            onClick={handleClickOnPage(secondPageNum)}
          >
            {secondPageNum}
          </SC.Button>
        )}
        {total > 2 && (
          <SC.Button
            active={current === lastPageNum}
            onClick={handleClickOnPage(lastPageNum)}
          >
            {lastPageNum}
          </SC.Button>
        )}
        <SC.Button
          isFunctionKey
          disabled={isLast}
          onClick={handleClickOnPage(current + 1)}
        >
          Next
        </SC.Button>
        <SC.Button
          isFunctionKey
          disabled={isLast}
          onClick={handleClickOnPage(total)}
        >
          Last
        </SC.Button>
      </div>
      <div>
        <strong>Page size</strong>
        {[PageSize.SMALL, PageSize.MEDIUM, PageSize.LARGE].map((size) => (
          <SC.Button
            data-testid={`pageSize${size}BtnId`}
            key={size}
            active={pageSize === size}
            isPageSizeKey
            onClick={() => onChangePageSize?.(size)}
          >
            {size}
          </SC.Button>
        ))}
      </div>
    </SC.Container>
  );
};

export default Pagination;
