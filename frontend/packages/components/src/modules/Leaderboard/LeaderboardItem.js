import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Card } from "../../components/Card/Card";
import { TitleCard } from "../../components/Title/Title";
import { Tag } from "../../components/Rating/Rating";


export const LeaderboardItem = ({ id, name, rating, ...other }) => {
  // const navigation = useNavigation();

  // const handleLinkPress = useCallback(() => {
  //   navigation.navigate(Screens.Idea, { id });
  // }, []);

  const IdeaCard = styled(Card)`
    flex-direction: row;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    padding: ${({ theme }) => theme.paddingMedium}px;
  `;


  console.log(other)

  return (
    <IdeaCard>
        <TitleCard>{name}</TitleCard>
        <Tag>+{rating}</Tag>
    </IdeaCard>
  );
};
