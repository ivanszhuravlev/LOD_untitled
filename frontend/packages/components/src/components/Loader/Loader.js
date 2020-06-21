import React from "react";
import styled, { useTheme } from "styled-components/native";
import { View, ActivityIndicator } from "react-native";

const LoaderWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`;

export const Loader = ({ ...props }) => {
  const theme = useTheme();

  return (
    <LoaderWrapper {...props}>
      <ActivityIndicator size="large" color={theme.colors.blue} />
    </LoaderWrapper>
  );
};
