import styled from "styled-components";
import { Spacing } from "configs/styles";
import {
  whiteColor,
  boxShadowColor,
  neutralColor,
  secondaryLightColor,
} from "configs/colors";

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
  Table: styled.table`
    display: block;
    margin: ${Spacing.normal} 0;
    border-collapse: collapse;
    width: 100%;
    max-width: 552px;
    overflow-x: auto;
    white-space: nowrap;
  `,
  Th: styled.th`
    border: 1px solid ${neutralColor};
    text-align: left;
    padding: ${Spacing.small};
  `,
  Td: styled.td`
    border: 1px solid ${neutralColor};
    text-align: left;
    padding: ${Spacing.small};
    height: 36px;
  `,
  Tr: styled.tr`
    &:nth-child(even) {
      background-color: ${secondaryLightColor};
    }
  `,
};
