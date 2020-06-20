import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export const Separator = styled(View)`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
`;