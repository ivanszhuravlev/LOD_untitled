import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { TitleBlue } from "../../components/Title/Title";
import { TagsList } from "../TagsList/TagsList";
import { getReadableTime } from "../../utils/getReadableTime";
import { Vote } from '../../components/Vote/Vote';

const Row = styled(View)`
  flex-direction: row;
  align-content: flex-end;
  /* background-color: #0000ff; */
`;

const Top = styled(View)`
  flex-direction: column;
  width: 80%;
  align-content: flex-end;
`;

const TopTitle = styled(View)`
flex-direction: row;
align-content: flex-end;
/* background-color: #0000ff; */
`;

const Tags = styled(TagsList)`
  margin-top: -6px;
`;

const Title = styled(TitleBlue)`
  margin-top: 8px;
  margin-right: ${({ theme }) => theme.paddingTiny1}px;
`;

const TopVote = styled(Vote)`
  flex-direction: column;
  padding: 5px 20px;
  width: 100px;
  height: 120px;
`

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

export const IdeaTop = ({ idea }) => {
  const { title, tags, description, created_at } = idea;

  return (
    <>
      <Row>
        <TopVote rating={150} />
        <Top>
          <TopTitle>
            <Title>{title}</Title>
            <Tags tags={tags} />
          </TopTitle>
          <Description>{description}</Description>
          <DateBlock>{getReadableTime(created_at)}</DateBlock>
        </Top>
      </Row>
    </>
  );
};
