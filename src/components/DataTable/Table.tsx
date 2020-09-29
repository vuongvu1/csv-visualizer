import React from "react";
import SC from "./styles";

interface Props {
  headerRow: string[];
  showingRows: Array<string[]>;
}

// have to use indexes as keys because rows don't have ids or any unique values
const Table: React.FC<Props> = ({ headerRow, showingRows }) => (
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

export default Table;
