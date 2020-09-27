import styled, { css } from "styled-components";
import { neutralColor, whiteColor, primaryColor } from "configs/colors";
import { Spacing } from "configs/styles";

interface ButtonProps {
  isFunctionKey?: boolean;
  disabled?: boolean;
  active?: boolean;
}

export default {
  Container: styled.div`
    text-align: center;
  `,
  Button: styled.button<ButtonProps>`
    padding: ${Spacing.small};
    border: 1px solid ${neutralColor};
    background-color: ${whiteColor};
    width: 34px;
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
