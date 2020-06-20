import React from "react";
import { View, Text, FlatList } from "react-native";
import { IdeaItem } from "../Idea/IdeaItem";

const dumpList = [
  { title: "Idea 1", id: 1 },
  { title: "Idea 2", id: 2 },
  { title: "Idea 3", id: 3 },
  { title: "Idea 4", id: 4 },
  { title: "Idea 5", id: 5 },
  { title: "Idea 6", id: 6 },
  { title: "Idea 7", id: 7 },
  { title: "Idea 8", id: 8 },
  { title: "Idea 9", id: 9 },
];

export const IdeasList = () => {
  const renderItem = ({ title, id }) => <IdeaItem title={title} id={id} />;
  const keyExtractor = ({ id }) => `ideaItem-${id}`;

  return (
    <FlatList
      data={dumpList}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      conta
    />
  );
};
