import React, { useCallback } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard } from "../../components/Title/Title";
import { useNavigation } from "../../hooks/use-navigation";
import { Screens } from "../Navigation/constants";

export const IdeaItem = ({ title, id }) => {
  const navigation = useNavigation();

  const handleLinkPress = useCallback(() => {
    navigation.navigate(Screens.Idea, { id });
  }, []);

  const IdeaCard = styled(Card)`
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }) => theme.paddingMedium}px;
  `;

  return (
    <TouchableOpacity onPress={handleLinkPress}>
      <IdeaCard>
        <TitleCard>{title}</TitleCard>
      </IdeaCard>
    </TouchableOpacity>
  );
};
