import styled from "styled-components";
import { neutralColor } from "configs/colors";
import { ScreenWidth } from "configs/styles";

const HEADER_HEIGHT = "100px";

export default {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `,
  Header: styled.div`
    width: 100%;
    height: ${HEADER_HEIGHT};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  BodyContainer: styled.div`
    flex: 1;
    width: 100%;
    background-color: ${neutralColor};
    display: flex;
    justify-content: center;
  `,
  Body: styled.div`
    width: 100%;
    max-width: 930px;
    display: flex;

    @media (max-width: ${ScreenWidth.medium}) {
      flex-direction: column;
    }
  `,
};
