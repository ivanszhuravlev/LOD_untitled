import React, { useCallback } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard, TitleBlue } from "../../components/Title/Title";
import { Screens, getLink } from "../Navigation/constants";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { TagsList } from "../TagsList/TagsList";
import { getReadableTime } from "../../utils/getReadableTime";

const IdeaCard = styled(Card)`
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.paddingMedium}px;
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

const InfoContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  margin-top: ${({ theme }) => theme.marginCard};
  justify-content: space-between;
  align-items: center;
`;

const TagsBlock = styled(View)``;

const DateBlock = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  color: ${({ theme }) => theme.colors.textGrey};
`;

const Description = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.text};
  color: ${({ theme }) => theme.colors.textGrey};
  margin: ${({ theme }) => theme.paddingTiny2}px 0px;
`;

export const IdeaItem = ({ idea, ...props }) => {
  const { tags, title, id, created_at, description } = idea;
  const href = getLink(Screens.Idea, { id });

  return (
    <IdeaCard {...props}>
      <Link href={href}>
        <IdeaTitle>{title}</IdeaTitle>
      </Link>
      <Description>{description}</Description>
      <InfoContainer>
        <DateBlock>{getReadableTime(created_at)}</DateBlock>
        <TagsBlock>
          <TagsList tags={tags} />
        </TagsBlock>
      </InfoContainer>
    </IdeaCard>
  );
};