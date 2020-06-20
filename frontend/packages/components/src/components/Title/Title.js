import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const H1 = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.h1};
`;
