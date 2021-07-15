// import { Button } from '@material-ui/core'
import styled from "styled-components";

export const CustomButton = styled.button`
  background-color: ${(props) => {
    if (props.primary) return "rgb(181, 250, 246)";
    if (props.inactive) return "rgba(135, 112, 255, 0.1)";
    if (props.warning) return "rgba(228, 175, 17, 0.2)";
    return "#897EFF";
  }};
  color: ${(props) => {
    if (props.primary) return "rgb(181, 250, 246)";
    if (props.inactive) return "rgb(181, 250, 246)";
    if (props.warning) return "rgba(228, 175, 17, 0.2)";
    return "#897EFF";
  }};
  padding: 12px 32px;
  height: auto;
  border-color: ${(props) => {
    if (props.primary) return " #8770FF";
    if (props.inactive) return "rgba(135, 112, 255, 0.1)";
    if (props.warning) return "rgba(228, 175, 17, 0.2)";
    return "#897EFF";
  }};
  &:hover {
    background-color: #6a61cc;
    color: #ffffff;
    border-color: #6a61cc;
  }
`;
