import React from "react";
import styled from 'styled-components/native'
import { View, Text, FlatList } from "react-native";
import { IdeaItem } from "../Idea/IdeaItem";
import { selectIdeas } from "../../redux/selectors/ideas";
import { useSelector } from "../../hooks/use-selector/use-selector";
import { Separator } from "../../components/Separator/Separator";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";

const ChallengesCard = styled(Card)`
  flex:1;
`
const ChallegesList = styled(FlatList)`
  width: 100%;
`;

export const ChallengesList = () => {
  const renderItem = ({ item: { title, id } = {} }) => (
    <IdeaItem title={title} id={id} />
  );
  const keyExtractor = ({ id } = {}) => `ideaItem-${id}`;
  const ideas = useSelector(selectIdeas);
  console.log('list', ideas)
  return (
    <ChallengesCard>
      <Title>Challenges</Title>
      <Separator />
      <ChallegesList
        data={ideas}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
      // conta
      />
    </ChallengesCard>
  );
};
