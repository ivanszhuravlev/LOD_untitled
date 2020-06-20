import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const RoundIconContainer = styled(View)`
  width: 19px;
  height: 19px;
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-color: ${({ theme }) => theme.colors.blue};
  border-radius: 14px;
`;

const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 11;
  line-height: 11;
`;

export const RoundIcon = ({ content, ...props }) => {
  return (
    <RoundIconContainer {...props}>
      <Label>{content}</Label>
    </RoundIconContainer>
  );
};

export const RoundIconGo = ({...props}) => {
  return <RoundIcon content={">"} {...props} />;
};

export const RoundIconNum = ({ num, ...props }) => {
  return <RoundIcon content={num.toString()} {...props} />;
};
