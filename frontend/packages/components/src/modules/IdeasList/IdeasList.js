import React from "react";
import { View, Text, FlatList } from "react-native";
import { IdeaItem } from "../Idea/IdeaItem";
import { selectIdeas } from "../../redux/selectors/ideas";
import { useSelector } from "../../hooks/use-selector/use-selector";

export const IdeasList = () => {
  const renderItem = ({ item: { title, id } = {} }) => (
    <IdeaItem title={title} id={id} />
  );
  const keyExtractor = ({ id } = {}) => `ideaItem-${id}`;
  const ideas = useSelector(selectIdeas);
    console.log('list', ideas)
  return (
    <FlatList
      data={ideas}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      // conta
    />
  );
};
