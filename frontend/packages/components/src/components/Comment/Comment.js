import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Text, Button, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard } from "../../components/Title/Title";
import { Vote } from "../Vote/Vote";

export const Comment = ({ title, id, text, user }) => {
  const Comment = styled(Card)`
    flex-direction: column;
    justify-content: flex-start;
    padding: ${({ theme }) => theme.paddingMedium}px;
  `;

  const UserName = styled(Text)`
    padding-bottom: 10px;
  `;


  const CommentText = styled(Text)`
    font-size: 16px;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.textGrey};
  `;

  // console.log(other)
  return (
    <Comment>
      <UserName>{user.name}</UserName>
      <CommentText>{text}</CommentText>
      <Vote rating={10}></Vote>
    </Comment>
  );
};
