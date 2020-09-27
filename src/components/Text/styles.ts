import styled, { css } from "styled-components";
import {
  primaryColor,
  secondaryColor,
  neutralColor,
  blackColor,
} from "configs/colors";
import { FontSize } from "configs/styles";
import { TextType } from "./index";

export default {
  Container: styled.div<{ type?: TextType }>`
    color: ${neutralColor};
    font-weight: normal;
    font-size: ${FontSize.medium};

    ${({ type }) => {
      if (type === TextType.H1) {
        return css`
          color: ${primaryColor};
          font-weight: bold;
          font-size: ${FontSize.large};
        `;
      }
      if (type === TextType.H2) {
        return css`
          color: ${secondaryColor};
          font-weight: bold;
          font-size: ${FontSize.large};
        `;
      }

      if (type === TextType.BODY) {
        return css`
          color: ${blackColor};
          font-weight: normal;
          font-size: ${FontSize.medium};
        `;
      }
    }}
  `,
};
