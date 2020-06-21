import React from "react";
import styled from "styled-components/native";
import { View, Text, Dimensions } from "react-native";
import { Card } from "../../components/Card/Card";
import { CommentsList } from "../../components/Comment/CommentsList";
import { TitleCard, TitleBlue } from "../../components/Title/Title";
import { Block } from "../../components/Block/Block";
import { TagsList } from "../TagsList/TagsList";
import { getReadableTime } from "../../utils/getReadableTime";
import { IdeaTop } from "../Idea/IdeaTop";

const NativeCard = styled(Card)`
  flex: 1;
  height: 100%;
  margin: 0;
  border-radius: 16px;
`;

export const Idea = ({ idea = {} }) => {
  const { title, tags, description, created_at } = idea;

  return (
    <NativeCard>
      <IdeaTop idea={idea}/>
    </NativeCard>
  );
};
