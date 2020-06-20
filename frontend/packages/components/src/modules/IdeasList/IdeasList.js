import React from "react";
import { View, Text, FlatList } from "react-native";
import { IdeaItem } from "../Idea/IdeaItem";
import { selectIdeas } from "../../redux/selectors/ideas";
import { useSelector } from "../../hooks/use-selector/use-selector";
import { Card } from "../../components/Card/Card";
import { Separator } from "../../components/Separator/Separator";
import { Title } from "../../components/Title/Title";
import styled from "styled-components/native";

const IdeaCard = styled(Card)`
  margin-right: 16px;
  flex: 1;
  /* background-color: #00ff00; */

`;

const IdeasListView = styled(FlatList)`
  width: 100%;
`;

const IdeasTitle = styled(Title)`
  margin-left: ${({ theme }) => theme.marginCard}px;
  margin-bottom: ${({ theme }) => theme.marginCard * 1.5}px;
`;

export const IdeasList = () => {
  const renderItem = ({ item = {} }) => <IdeaItem idea={item} />;
  const keyExtractor = ({ id } = {}) => `ideaItem-${id}`;
  const ideas = useSelector(selectIdeas);
  return (
    <IdeaCard>
      <IdeasTitle>Идеи</IdeasTitle>
      <Separator />
      <IdeasListView
        data={ideas}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
      />
    </IdeaCard>
  );
};
