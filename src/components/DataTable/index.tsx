import React, { useState, useEffect } from "react";
import SC from "./styles";
import Pagination, { PageSize } from "../Pagination";
import Text, { TextType } from "../Text";

interface Props {
  data: Array<string[]>;
}

// have to use indexes as keys because rows don't have ids or nay unique values
const renderTable = (headerRow: string[], showingRows: Array<string[]>) => (
  <SC.Table>
    <thead>
      <SC.Tr>
        {headerRow.map((header, index) => (
          <SC.Th key={index}>{header}</SC.Th>
        ))}
      </SC.Tr>
    </thead>
    <tbody>
      {showingRows.map((row, index) => (
        <SC.Tr key={index}>
          {row.map((cell, ind) => (
            <SC.Td key={ind}>{cell}</SC.Td>
          ))}
        </SC.Tr>
      ))}
    </tbody>
  </SC.Table>
);

const getTotalPages = (data: Array<string[]>, pageSize: number) => {
  const allDataRows = data.length - 1; // minus header row
  const isLastPageFitPageSize = allDataRows % pageSize === 0;
  const totalPages = parseInt(`${allDataRows / pageSize}`, 10);
  return isLastPageFitPageSize ? totalPages : totalPages + 1;
};

const DataTable: React.FC<Props> = ({ data }) => {
  const [pageSize, setPageSize] = useState(PageSize.MEDIUM);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [headerRow, setHeaderRow] = useState<string[]>([]);
  const [showingRows, setShowingRows] = useState<Array<string[]>>([]);

  useEffect(() => {
    if (data.length > 0) {
      setHeaderRow(data[0]);
      setCurrentPage(1);
      setTotalPages(getTotalPages(data, pageSize));
    }
  }, [data, pageSize]);

  useEffect(() => {
    if (data.length > 0) {
      const showingIndex = (currentPage - 1) * pageSize + 1; // plus 1 because of the header row
      setShowingRows(data.slice(showingIndex, showingIndex + pageSize));
    }
  }, [currentPage, data, pageSize]);

  const shouldShowTable = data?.length > 0;

  return (
    <SC.Container>
      {!shouldShowTable && (
        <Text type={TextType.BODY}>No data to display.</Text>
      )}
      {shouldShowTable && (
        <>
          {renderTable(headerRow, showingRows)}
          <Pagination
            total={totalPages}
            current={currentPage}
            onChangePage={(_, nextPage) => setCurrentPage(nextPage)}
            pageSize={pageSize}
            onChangePageSize={setPageSize}
          />
        </>
      )}
    </SC.Container>
  );
};

export default DataTable;
