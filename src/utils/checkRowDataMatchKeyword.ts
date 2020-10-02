const cleanString = (str: string) => str.trim().toLowerCase();

const checkRowDataMatchKeyword = (
  rowData: string[],
  keywords: string
): boolean => {
  return rowData.some((cellData) =>
    cleanString(cellData).includes(cleanString(keywords))
  );
};

export default checkRowDataMatchKeyword;
