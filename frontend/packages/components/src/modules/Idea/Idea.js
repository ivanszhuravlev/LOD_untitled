import React from "react";
import { View, Text } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard, Title } from "../../components/Title/Title";
import { useSelector } from "../../hooks/use-selector";
import { selectIdea } from "../../redux/selectors/ideas";
import { useNavigation } from "../../hooks/use-navigation";

export const Idea = ({ idea }) => {
  const { title, tags, description, created_at } = idea;
  console.log("idea", idea);
  return (
    <Card>
      <Title>{title}</Title>
      <TitleCard>{description}</TitleCard>
      <Text>{created_at}</Text>
    </Card>
  );
};
