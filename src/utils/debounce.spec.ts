import { wait } from "@testing-library/react";
import debounce from "./debounce";

describe("debounce", () => {
  test("should return correct result", () => {
    const myFunction = jest.fn();
    const functionWithDebounce = debounce(myFunction, 100);

    functionWithDebounce("test-string");

    wait(() => {
      expect(myFunction).toBeCalledWith("test-string");
    }, 100);
  });
});
