import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Text, Button, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard } from "../../components/Title/Title";

export const Comment = ({ title, id, text, user }) => {
  const Comment = styled(Card)`
    flex-direction: column;
    justify-content: flex-start;
    padding: ${({ theme }) => theme.paddingMedium}px;
  `;

  const UserName = styled(Text)`
    padding-bottom: 10px;
  `;

  const Rating = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    padding: ${({ theme }) => theme.paddingMedium}px;
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
      <Rating>
        <Button title={"up"} />
        <Text>10</Text>
        <Button title={"downn"} />
      </Rating>
    </Comment>
  );
};
