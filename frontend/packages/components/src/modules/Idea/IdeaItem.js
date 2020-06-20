import React, { useCallback } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard, Title, TitleBlue } from "../../components/Title/Title";
import { Screens, getLink } from "../Navigation/constants";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { TagsList } from "../TagsList/TagsList";
import { RoundIconGo } from "../../components/Icon/RoundIcon";
import { getReadableTime } from "../../utils/getReadableTime";

const IdeaCard = styled(Card)`
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  padding: ${({ theme }) => theme.paddingMedium}px;
`;

const Link = styled(ButtonLink)`
  padding-left: ${({ theme }) => theme.paddingTiny2 + 21}px;
`;

const InfoContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  margin-top: ${({ theme }) => theme.marginCard};
  justify-content: space-between;
  align-items: center;
`;

const TagsBlock = styled(View)``;

const GoIcon = styled(RoundIconGo)`
  margin-right: ${({ theme }) => theme.paddingTiny2}px;
  position: absolute;
  left: ${({ theme }) => theme.paddingMedium};
  margin-top: 1px;
`;

const DateBlock = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const IdeaItem = ({ idea, ...props }) => {
  const { tags, title, id, created_at } = idea;
  const href = getLink(Screens.Idea, { id });

  return (
    <IdeaCard {...props}>
      <Link href={href}>
        <GoIcon />
        <View>
          <TitleBlue>{title}</TitleBlue>
        </View>
      </Link>
      <InfoContainer>
        <TagsBlock>
          <TagsList tags={tags} />
        </TagsBlock>
        <DateBlock>{getReadableTime(created_at)}</DateBlock>
      </InfoContainer>
    </IdeaCard>
  );
};
