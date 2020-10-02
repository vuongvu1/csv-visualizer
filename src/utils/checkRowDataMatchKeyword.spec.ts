import checkRowDataMatchKeyword from "./checkRowDataMatchKeyword";

describe("checkRowDataMatchKeyword", () => {
  test("should return correct result", () => {
    const rowData = ["this", "is", "a", "ROw", "daTa"];
    const keywords = ["tHIs", "iS   ", "keywords"];

    const expected = [true, true, false];
    const results = keywords.map((key) =>
      checkRowDataMatchKeyword(rowData, key)
    );

    expect(results).toEqual(expected);
  });
});
