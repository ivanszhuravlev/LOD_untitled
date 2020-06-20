import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Card } from "../../components/Card/Card";
import { CommentsList } from "../../components/Comment/CommentsList";
import { TitleCard, TitleBlue } from "../../components/Title/Title";
import { Block } from "../../components/Block/Block";
import { TagsList } from "../TagsList/TagsList";
import { getReadableTime } from "../../utils/getReadableTime";

const Top = styled(View)`
  flex-direction: row;
  align-content: flex-end;
  /* background-color: #0000ff; */
`;

const Tags = styled(TagsList)`
  margin-top: -6px;
`;

const Title = styled(TitleBlue)`
  margin-top: 8px;
  margin-right: ${({theme}) => theme.paddingTiny1}px;
`;

const Description = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.button};
  color: ${({ theme }) => theme.colors.textGrey};
  margin: ${({ theme }) => theme.paddingTiny2}px 0px;
`;

const DateBlock = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  color: ${({ theme }) => theme.colors.textGrey};
  margin-top: ${({theme}) => theme.paddingMedium}px;
`;

export const Idea = ({ idea }) => {
  const { title, tags, description, created_at } = idea;

  return (
    <div>
      <Card>
        <Top>
          <Title>{title}</Title>
          <Tags tags={tags} />
        </Top>
        <Description>{description}</Description>
        <DateBlock>{getReadableTime(created_at)}</DateBlock>
      </Card>
      <Block>
        <CommentsList></CommentsList>
      </Block>
    </div>
  );
};
