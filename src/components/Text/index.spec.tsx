import React from "react";
import { render, cleanup } from "@testing-library/react";
import Text, { TextType } from "./index";

describe("Text", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const TextH1 = render(<Text type={TextType.H1} />);
    const TextH2 = render(<Text type={TextType.H2} />);
    const TextBody = render(<Text type={TextType.BODY} />);

    expect(TextH1.container).toMatchSnapshot();
    expect(TextH2.container).toMatchSnapshot();
    expect(TextBody.container).toMatchSnapshot();
  });
});
