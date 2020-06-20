import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export const Block = styled(View)`
  /* padding: 12px 8px; */
  /* border-radius: 6px; */
  /* margin: 8px; */
  background-color: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.paddingVertical}px
    ${({ theme }) => theme.paddingHorizontal}px;
`;
