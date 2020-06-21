import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

export const Label = ({ ...props }) => {
  const { text } = props;

  const Label = styled(Text)`
    color: gray;
    font-size: 12px;
    padding-bottom: 5px;
  `;

    return (
      <Label>{text}</Label>
    );
};
