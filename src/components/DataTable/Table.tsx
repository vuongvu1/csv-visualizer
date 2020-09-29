import React from "react";
import { Spinner } from "assets/icons";
import SC from "./styles";

interface Props {
  headerRow: string[];
  showingRows: Array<string[]>;
  loading?: boolean;
}

// have to use indexes as keys because rows don't have ids or any unique values
const Table: React.FC<Props> = ({ headerRow, showingRows, loading }) => (
  <SC.TableContainer>
    {loading && (
      <SC.LoadingOverlay>
        <Spinner width="48px" height="48px" />
      </SC.LoadingOverlay>
    )}
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
  </SC.TableContainer>
);

export default Table;
