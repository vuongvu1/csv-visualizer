import styled, { css } from "styled-components";
import {
  neutralColor,
  neutralDarkColor,
  whiteColor,
  primaryColor,
} from "configs/colors";
import { Spacing } from "configs/styles";

interface ButtonProps {
  isFunctionKey?: boolean;
  isPageSizeKey?: boolean;
  disabled?: boolean;
  active?: boolean;
}

export default {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Button: styled.button<ButtonProps>`
    padding: ${Spacing.small};
    border: 1px solid ${neutralDarkColor};
    background-color: ${whiteColor};
    min-width: 34px;
    height: 34px;

    ${(p) =>
      !p.disabled &&
      css`
        &:hover {
          background-color: ${neutralColor};
        }
      `}

    ${(p) =>
      p.isFunctionKey &&
      css`
        width: 46px;
      `}

    ${(p) =>
      p.isPageSizeKey &&
      css`
        margin-left: ${Spacing.small};
        height: 28px;
      `}

    ${(p) =>
      p.active &&
      css`
        font-weight: bold;
        color: ${whiteColor};
        background-color: ${primaryColor};

        &:hover {
          background-color: ${primaryColor};
        }
      `}
  `,
};
