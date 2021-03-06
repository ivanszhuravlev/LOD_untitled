import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleBlue } from "../../components/Title/Title";
import { Screens, getLink } from "../Navigation/constants";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { TagsList } from "../TagsList/TagsList";
import { getReadableTime } from "../../utils/getReadableTime";
import { UserDateBlock } from "./UserDateBlock";
import { IdeaStatus } from "./IdeaStatus";
import { Vote } from "../../components/Vote/Vote";

const IdeaCard = styled(Card)`
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: 0;
`;

const Link = styled(ButtonLink)`
  margin-bottom: ${({ theme }) => theme.paddingTiny2 * 2}px;
`;

const IdeaTitle = styled(TitleBlue)`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.blue};
  padding-bottom: 2px;
`;

const TagsContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  margin-top: ${({ theme }) => theme.marginCard};
  justify-content: flex-end;
  align-items: center;
`;

const InfoContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  margin-top: ${({ theme }) => theme.marginCard};
  justify-content: space-between;
  align-items: center;
`;

const Description = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.text};
  color: ${({ theme }) => theme.colors.textGrey};
  margin: ${({ theme }) => theme.paddingTiny2}px 0px;
`;

const LeftSide = styled(View)`
  align-items: flex-start;
`;

const RightSide = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.paddingMedium}px;
  box-sizing: border-box;
  flex: 1;
`;

const VoteStyled = styled(Vote)`
  flex-direction: column;
  height: 160px;
  width: 36px;
  margin: 0;
  /* padding: 0; */
  box-sizing: border-box;
`;

export const IdeaItem = ({ idea, ...props }) => {
  const { tags, title, id, created_at, description, status } = idea;
  const href = getLink(Screens.Idea, { id });
  console.log("idea", idea);
  return (
    <IdeaCard {...props}>
      <LeftSide>
        <VoteStyled rating={0} />
      </LeftSide>
      <RightSide>
        <Link href={href}>
          <IdeaTitle>{title}</IdeaTitle>
        </Link>
        <Description>{description}</Description>
        <TagsContainer>
          <TagsList tags={tags} />
        </TagsContainer>
        <InfoContainer>
          <UserDateBlock date={getReadableTime(created_at)} />
          <IdeaStatus status={status} />
        </InfoContainer>
      </RightSide>
    </IdeaCard>
  );
};
