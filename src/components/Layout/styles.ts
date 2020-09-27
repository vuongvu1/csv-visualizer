import styled from "styled-components";
import { neutralColor } from "configs/colors";

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
    width: 100%;
    background-color: ${neutralColor};
    height: calc(100vh - ${HEADER_HEIGHT});
    display: flex;
    justify-content: center;
  `,
  Body: styled.div`
    max-width: 930px;
    width: 100%;
  `,
};
