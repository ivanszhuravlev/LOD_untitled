import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  align-self: flex-end;
`;

export const Tag = ({ children }) => {
    return (
        <Label>{children}</Label>
    );
};
