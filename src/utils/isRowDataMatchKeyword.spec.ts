import isRowDataMatchKeyword from "./isRowDataMatchKeyword";

describe("isRowDataMatchKeyword", () => {
  test("should return correct result", () => {
    const rowData = ["this", "is", "a", "ROw", "daTa"];
    const keywords = ["tHIs", "iS   ", "keywords"];

    const expected = [true, true, false];
    const results = keywords.map((key) => isRowDataMatchKeyword(rowData, key));

    expect(results).toEqual(expected);
  });
});
