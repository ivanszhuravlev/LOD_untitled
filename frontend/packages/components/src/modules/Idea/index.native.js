import React from "react";
import styled from "styled-components/native";
import { View, Text, Dimensions } from "react-native";
import { Card } from "../../components/Card/Card";
import { CommentsList } from "../../components/Comment/CommentsList";
import { TitleCard, TitleBlue } from "../../components/Title/Title";
import { Block } from "../../components/Block/Block";
import { TagsList } from "../TagsList/TagsList";
import { getReadableTime } from "../../utils/getReadableTime";

const Top = styled(View)`
  flex-direction: column;
  align-content: flex-start;
`;

const Tags = styled(TagsList)`
  margin-top: -6px;
`;

const Title = styled(TitleBlue)`
  margin-top: 8px;
  margin-right: ${({ theme }) => theme.paddingTiny1}px;
`;

const Description = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.button};
  color: ${({ theme }) => theme.colors.textGrey};
  margin: ${({ theme }) => theme.paddingTiny2}px 0px;
`;

const DateBlock = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  color: ${({ theme }) => theme.colors.textGrey};
  margin-top: ${({ theme }) => theme.paddingMedium}px;
`;

const NativeCard = styled(Card)`
  flex: 1;
  height: 100%;
  margin: 0;
  border-radius: 16px;
`;

export const Idea = ({ idea = {} }) => {
  const { title, tags, description, created_at } = idea;
  
  return (
    <NativeCard>
      <Top>
        <Title>{title}</Title>
        <Tags tags={tags} />
      </Top>
      <Description>{description}</Description>
      <DateBlock>{getReadableTime(created_at)}</DateBlock>
    </NativeCard>
  );
};
