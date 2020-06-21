import React from "react";
import styled from "styled-components/native";
import { View, Text, FlatList } from "react-native";
import { IdeaItem } from "../IdeaItem/IdeaItem";
import { selectIdeas } from "../../redux/selectors/ideas";
import { useSelector } from "../../hooks/use-selector/use-selector";
import { Separator } from "../../components/Separator/Separator";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";

const ChallengesCard = styled(Card)`
  flex: 1;
`;
const ChallengesListComponent = styled(FlatList)`
  width: 100%;
`;

const ChallengesTitle = styled(Title)`
  margin-left: ${({ theme }) => theme.marginCard}px;
  margin-bottom: ${({ theme }) => theme.marginCard * 1.5}px;
`;

export const ChallengesList = () => {
  const renderItem = ({ item = {} }) => <IdeaItem idea={item} />;
  const keyExtractor = ({ id } = {}) => `ideaItem-${id}`;
  const ideas = useSelector(selectIdeas);
  console.log("list", ideas);
  return (
    <ChallengesCard>
      <ChallengesTitle>Задачи</ChallengesTitle>
      <Separator />
      <ChallengesListComponent
        data={ideas}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
      />
    </ChallengesCard>
  );
};
