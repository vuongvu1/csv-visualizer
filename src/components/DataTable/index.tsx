import React, { useState, useEffect } from "react";
import Pagination, { PageSize } from "../Pagination";
import Text, { TextType } from "../Text";
import SC from "./styles";
import Table from "./Table";

interface Props {
  data: Array<string[]>;
}

const getTotalPages = (data: Array<string[]>, pageSize: number) => {
  const allDataRows = data.length - 1; // minus header row
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
      setLoading(true);
      const showingIndex = (currentPage - 1) * pageSize + 1; // plus 1 because of the header row
      setShowingRows(data.slice(showingIndex, showingIndex + pageSize));

      setTimeout(() => setLoading(false), 400); // Assume data is processing
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
          <Table
            headerRow={headerRow}
            showingRows={showingRows}
            loading={loading}
          />
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
