import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

const Button = styled(TouchableOpacity)`
  padding: ${({ theme }) => theme.paddingVertical}px
    ${({ theme }) => theme.paddingHorizontal}px;
  width: auto;
`;
const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: ${({ theme }) => theme.fontSize.button};
`;

export const ButtonLink = ({ title, ...props }) => {
  return (
    <Button {...props}>
      <Title>{title}</Title>
    </Button>
  );
};
