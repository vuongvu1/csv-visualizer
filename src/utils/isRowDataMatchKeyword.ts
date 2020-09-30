const cleanString = (str: string) => str.trim().toLowerCase();

const isRowDataMatchKeyword = (rowData: string[], keywords: string) => {
  return rowData.some((cellData) =>
    cleanString(cellData).includes(cleanString(keywords))
  );
};

export default isRowDataMatchKeyword;
