import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation, Link } from "@react-navigation/native";

const Button = styled(Link)`
  padding: ${({ theme }) => theme.paddingMedium}px
    ${({ theme }) => theme.paddingSmall}px;
  width: auto;
`;
const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: ${({ theme }) => theme.fontSize.button};
`;

export const ButtonLink = ({ title, onPress, href, ...props }) => {
  // const navigation = useNavigation()
  return (
    <Button {...props}>
      <Title>{title}</Title>
    </Button>
  );
};
