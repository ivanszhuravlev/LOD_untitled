import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

export const TagWrapper = styled(View)`
  padding: ${({ theme }) => theme.paddingTiny1}px
    ${({ theme }) => theme.paddingTiny2}px;

  background-color: ${({ theme }) => theme.colors.white};
  
  /* border: solid; */
  border-width: 1;
  border-color: ${({ theme }) => theme.colors.blue};

  margin-right: ${({ theme }) => theme.paddingTiny};

  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.textSmall};
`;

export const Tag = ({ tag, key }) => {
  const { title } = tag;
  return (
    <TagWrapper key={key} tag={tag}>
      <Label>{title}</Label>
    </TagWrapper>
  );
};
