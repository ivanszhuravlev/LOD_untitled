import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export const Card = styled(View)`
  padding: ${({ theme }) => theme.paddingMedium}px
    ${({ theme }) => theme.paddingSmall}px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.marginCard}px;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
