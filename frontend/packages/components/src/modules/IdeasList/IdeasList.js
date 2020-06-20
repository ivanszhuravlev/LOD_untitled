import React from "react";
import { View, Text, FlatList } from "react-native";
import { IdeaItem } from "../Idea/IdeaItem";
import { selectIdeas } from "../../redux/selectors/ideas";
import { useSelector } from "../../hooks/use-selector/use-selector";

export const IdeasList = () => {
  const renderItem = ({ item = {} }) => (
    <IdeaItem idea={item} />
  );
  const keyExtractor = ({ id } = {}) => `ideaItem-${id}`;
  const ideas = useSelector(selectIdeas);

  return (
    <FlatList
      data={ideas}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      // conta
    />
  );
};
