import styled from "styled-components";
import { Search } from "assets/icons";
import { neutralDarkColor } from "configs/colors";
import { FontSize } from "configs/styles";

export default {
  Container: styled.div`
    position: relative;
    width: 60%;
    height: 32px;
  `,
  SearchInput: styled.input`
    border: 2px solid ${neutralDarkColor};
    width: 100%;
    height: 100%;
    border-radius: 24px;
    font-size: ${FontSize.medium};
    padding: 0 34px 0 12px;
  `,
  Search: styled(Search)`
    position: absolute;
    top: 8px;
    right: 12px;
    cursor: pointer;
  `,
};
