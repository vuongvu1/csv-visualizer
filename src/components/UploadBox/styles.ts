import styled from "styled-components";
import { Spacing, ScreenWidth } from "configs/styles";
import {
  whiteColor,
  boxShadowColor,
  secondaryColor,
  neutralDarkColor,
  secondaryLightColor,
} from "configs/colors";
import { Document as DocumentIcon } from "assets/icons";

export default {
  Container: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
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
  FileInput: styled.input`
    display: none;
  `,
  Label: styled.label`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${Spacing.normal};
    border-radius: 12px;
    border: 1px dashed ${secondaryColor};
    color: ${neutralDarkColor};
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;

    &:hover {
      background-color: ${secondaryLightColor};
    }
  `,
  UploadedFile: styled.div`
    margin: ${Spacing.normal} ${Spacing.normal} 0;
    display: flex;
    justify-content: space-between;
  `,
  IconAndLabel: styled.div`
    display: flex;
    align-items: center;
  `,
  FileIcon: styled(DocumentIcon)`
    margin-right: ${Spacing.small};
  `,
};
