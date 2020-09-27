import React, { useCallback } from "react";
import SC from "./styles";

interface Props {
  total: number;
  current: number;
  onChange?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    page: number
  ) => void;
}

// TODO: Improve this component to support page total less than 3
const Pagination: React.FC<Props> = ({ total, current, onChange }) => {
  const isFirst = current === 1;
  const isLast = current === total;
  const firstPageNum = isFirst ? current : isLast ? current - 2 : current - 1;
  const secondPageNum = isFirst ? 2 : isLast ? total - 1 : current;
  const lastPageNum = isFirst ? 3 : isLast ? total : current + 1;

  const handleClick = useCallback(
    (nextPage: number) => (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => onChange?.(event, nextPage),
    [onChange]
  );

  return (
    <SC.Container>
      <SC.Button isFunctionKey disabled={isFirst} onClick={handleClick(1)}>
        First
      </SC.Button>
      <SC.Button
        isFunctionKey
        disabled={isFirst}
        onClick={handleClick(current - 1)}
      >
        Prev
      </SC.Button>
      <SC.Button active={isFirst} onClick={handleClick(firstPageNum)}>
        {firstPageNum}
      </SC.Button>
      <SC.Button
        active={!isFirst && !isLast}
        onClick={handleClick(secondPageNum)}
      >
        {secondPageNum}
      </SC.Button>
      <SC.Button active={isLast} onClick={handleClick(lastPageNum)}>
        {lastPageNum}
      </SC.Button>
      <SC.Button
        isFunctionKey
        disabled={isLast}
        onClick={handleClick(current + 1)}
      >
        Next
      </SC.Button>
      <SC.Button isFunctionKey disabled={isLast} onClick={handleClick(total)}>
        Last
      </SC.Button>
    </SC.Container>
  );
};

export default Pagination;
