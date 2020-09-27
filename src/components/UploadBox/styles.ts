import styled from "styled-components";
import { Spacing, ScreenWidth } from "configs/styles";
import { whiteColor, boxShadowColor } from "configs/colors";

export default {
  Container: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
    margin: ${Spacing.large};
    margin-right: 0;
    background-color: ${whiteColor};
    box-shadow: 0px 1px 0px ${boxShadowColor};
    border-radius: 12px;

    @media (max-width: ${ScreenWidth.medium}) {
      margin-right: ${Spacing.large};
      margin-bottom: 0;
    }
  `,
};
