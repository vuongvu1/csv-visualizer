import React, { useState } from "react";
import SC from "./styles";
import Pagination from "../Pagination";

interface Props {}

const DataTable: React.FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <SC.Container>
      <Pagination
        total={10}
        current={currentPage}
        onChange={(_, nextPage) => setCurrentPage(nextPage)}
      />
    </SC.Container>
  );
};

export default DataTable;
