import React, { useState, useEffect, useCallback } from "react";
import Pagination, { PageSize } from "../Pagination";
import SearchBar from "../SearchBar";
import { checkRowDataMatchKeyword } from "utils";
import SC from "./styles";
import Table from "./Table";

interface Props {
  data: Array<string[]>;
}

const getTotalPages = (dataRows: Array<string[]>, pageSize: number) => {
  const allDataRows = dataRows.length;
  const isLastPageFitPageSize = allDataRows % pageSize === 0;
  const totalPages = parseInt(`${allDataRows / pageSize}`, 10);
  return isLastPageFitPageSize ? totalPages : totalPages + 1;
};

const DataTable: React.FC<Props> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(PageSize.MEDIUM);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [headerRow, setHeaderRow] = useState<string[]>([]);
  const [dataRows, setDataRows] = useState<Array<string[]>>([]);
  const [showingRows, setShowingRows] = useState<Array<string[]>>([]);
  const shouldShowTable = data.length > 0;

  useEffect(() => {
    if (data.length > 0) {
      setHeaderRow(data[0]);
      setDataRows(data.slice(1, data.length));
    }
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
    setTotalPages(getTotalPages(dataRows, pageSize));
  }, [dataRows, pageSize]);

  useEffect(() => {
    setLoading(true);
    const showingIndex = (currentPage - 1) * pageSize;
    setShowingRows(dataRows.slice(showingIndex, showingIndex + pageSize));

    setTimeout(() => setLoading(false), 400); // Assume data is processing
  }, [currentPage, dataRows, pageSize]);

  const handleSearchTable = useCallback(
    (keywords: string) => {
      setLoading(true);
      const originalDataRows = data.slice(1, data.length); // remove header row

      if (keywords) {
        setDataRows(
          originalDataRows.filter((rowData) =>
            checkRowDataMatchKeyword(rowData, keywords)
          )
        );
      } else {
        setDataRows(originalDataRows);
      }

      setLoading(false);
    },
    [data]
  );

  return (
    <SC.Container>
      {!shouldShowTable && "No data to display."}
      {shouldShowTable && (
        <>
          <SearchBar onSearch={handleSearchTable} />
          <Table
            headerRow={headerRow}
            showingRows={showingRows}
            loading={loading}
          />
          {totalPages > 0 && (
            <Pagination
              total={totalPages}
              current={currentPage}
              onChangePage={(_, nextPage) => setCurrentPage(nextPage)}
              pageSize={pageSize}
              onChangePageSize={setPageSize}
            />
          )}
        </>
      )}
    </SC.Container>
  );
};

export default DataTable;
