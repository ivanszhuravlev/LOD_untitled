import React from "react";
import { View, Text } from "react-native";
import { Card } from "../../components/Card/Card";
import { CommentsList } from "../../components/Comment/CommentsList";
import { TitleCard, Title } from "../../components/Title/Title";
import { Block } from "../../components/Block/Block";
import { useSelector } from "../../hooks/use-selector/use-selector";
import { selectIdea } from "../../redux/selectors/ideas";
import { TagsList } from "../TagsList/TagsList";

export const Idea = ({ idea }) => {
  const { title, tags, description, created_at } = idea;
  console.log("idea", idea);
  return (
    <div>
      <Card>
        <Title>{title}</Title>
        <TagsList tags={tags} />
        <TitleCard>{description}</TitleCard>
        <Text>{created_at}</Text>
      </Card>
      <Block>
        <CommentsList></CommentsList>
      </Block>
    </div>
  );
};
