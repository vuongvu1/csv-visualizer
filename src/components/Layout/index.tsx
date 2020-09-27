import React from "react";
import SC from "./styles";
import Text, { TextType } from "../Text";

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <SC.Container>
      <SC.Header>
        <Text type={TextType.H1}>{title}</Text>
      </SC.Header>
      <SC.BodyContainer>
        <SC.Body>{children}</SC.Body>
      </SC.BodyContainer>
    </SC.Container>
  );
};

export default Layout;
