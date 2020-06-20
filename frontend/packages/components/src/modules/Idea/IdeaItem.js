import React, { useCallback } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard, Title } from "../../components/Title/Title";
import { Screens, getLink } from "../Navigation/constants";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";

export const IdeaItem = ({ title, id, ...props }) => {
  // const navigation = useNavigation();

  // const handleLinkPress = useCallback(() => {
  //   navigation.navigate(Screens.Idea, { id });
  // }, []);

  const IdeaCard = styled(Card)`
    flex-direction: row;
    align-items: center;
    width: 50%;
    /* flex: 1; */
    padding: ${({ theme }) => theme.paddingMedium}px;
  `;

  const Link = styled(ButtonLink)`
    width: 100%;
    height: 100%;
    flex: 1;
  `;
  const href = getLink(Screens.Idea, { id });
  
  return (
    <IdeaCard {...props}>
      <Link
        href={href}
        // onPress={handleLinkPress}
      >
        <Title>{title}</Title>
      </Link>
    </IdeaCard>
  );
};
