import React, { useCallback } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard } from "../../components/Title/Title";
import { useNavigation } from "../../hooks/use-navigation";
import { Screens, getLink } from "../Navigation/constants";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";

export const IdeaItem = ({ title, id }) => {
  const navigation = useNavigation();

  // const handleLinkPress = useCallback(() => {
  //   navigation.navigate(Screens.Idea, { id });
  // }, []);

  const IdeaCard = styled(Card)`
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }) => theme.paddingMedium}px;
  `;

  const Link = styled(ButtonLink)`

    width: 100%;
    height: 100%;
    flex:1;
  `

  return (
    <IdeaCard>
      <Link
        href={getLink(Screens.Idea, { id })}
        // onPress={handleLinkPress}
      >
        <TitleCard>{title}</TitleCard>
      </Link>
    </IdeaCard>
  );
};
