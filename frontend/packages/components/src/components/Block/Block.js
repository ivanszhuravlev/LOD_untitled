import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export const Block = styled(View)`
  background-color: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.paddingMedium}px
    ${({ theme }) => theme.paddingSmall}px;
  flex: 1;
`;
