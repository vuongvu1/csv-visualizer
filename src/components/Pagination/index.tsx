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
  const firstPageNum = isFirst ? current : isLast ? current - 2 : current - 1;
  const secondPageNum = isFirst ? 2 : isLast ? total - 1 : current;
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
        <SC.Button active={isFirst} onClick={handleClickOnPage(firstPageNum)}>
          {firstPageNum}
        </SC.Button>
        <SC.Button
          active={!isFirst && !isLast}
          onClick={handleClickOnPage(secondPageNum)}
        >
          {secondPageNum}
        </SC.Button>
        <SC.Button active={isLast} onClick={handleClickOnPage(lastPageNum)}>
          {lastPageNum}
        </SC.Button>
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
        Page size
        {[PageSize.SMALL, PageSize.MEDIUM, PageSize.LARGE].map((size) => (
          <SC.Button
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
