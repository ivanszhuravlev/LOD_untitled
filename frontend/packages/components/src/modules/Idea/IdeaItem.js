import React, { useCallback } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard, Title, TitleBlue } from "../../components/Title/Title";
import { Screens, getLink } from "../Navigation/constants";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { TagsList } from "../TagsList/TagsList";

const IdeaCard = styled(Card)`
  flex-direction: row;
  align-items: center;
  width: 50%;
  /* flex: 1; */
  padding: ${({ theme }) => theme.paddingMedium}px;
`;

const Link = styled(ButtonLink)``;

const InfoContainer = styled(View)`
  flex-direction: row;
`;

const TagsBlock = styled(View)``;

export const IdeaItem = ({ title, id, ...props }) => {
  const href = getLink(Screens.Idea, { id });

  return (
    <IdeaCard {...props}>
      <Link href={href}>
        <TitleBlue>{`> ${title}`}</TitleBlue>
        <InfoContainer>
          <TagsBlock>
            <TagsList />
          </TagsBlock>
        </InfoContainer>
      </Link>
    </IdeaCard>
  );
};
