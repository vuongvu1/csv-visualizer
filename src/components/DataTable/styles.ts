import styled from "styled-components";
import { Spacing } from "configs/styles";
import { whiteColor, boxShadowColor } from "configs/colors";

export default {
  Container: styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    margin: ${Spacing.large};
    padding: ${Spacing.normal};
    background-color: ${whiteColor};
    box-shadow: 0px 1px 0px ${boxShadowColor};
    border-radius: 12px;
  `,
};
