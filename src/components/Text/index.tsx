import React from "react";
import SC from "./styles";

export enum TextType {
  H1 = "h1",
  H2 = "h2",
  BODY = "body",
}

interface Props {
  type?: TextType;
}

const Text: React.FC<Props> = ({ type, children }) => {
  return (
    <SC.Container as={type || "div"} type={type}>
      {children}
    </SC.Container>
  );
};

export default Text;
