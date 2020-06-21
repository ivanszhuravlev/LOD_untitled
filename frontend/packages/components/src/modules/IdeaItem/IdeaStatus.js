import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const getStatesLabel = (state) => {
  const labels = {
    0: "Открыта",
    1: "На рассмотрении",
    2: "В работе",
    3: "Отклонена",
    4: "Готова",
  };

  return labels[state];
};

const getStatesColor = (state, colors) => {
  const variants = {
    0: colors.grey2,
    1: colors.blue2,
    2: colors.yellow,
    3: colors.red,
    4: colors.green,
  };

  return variants[state];
};

export const Container = styled(View)`
  padding: ${({ theme }) => theme.paddingTiny1}px
    ${({ theme }) => theme.paddingTiny2}px;

  /* background-color: ${({ theme }) => theme.colors.white}; */
  /* border-width: 4; */
  background-color: ${({ status, theme }) => getStatesColor(status, theme.colors)};

  margin-right: ${({ theme }) => theme.paddingTiny1};

  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.textSmall};
`;

export const IdeaStatus = ({ status, ...props }) => {
  return (
    <Container status={status} {...props}>
      <Label>{getStatesLabel(status)}</Label>
    </Container>
  );
};
