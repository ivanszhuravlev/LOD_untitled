import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Text, Button, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard } from "../../components/Title/Title";
import { Vote } from "../Vote/Vote";

export const Comment = ({ title, id, text, user }) => {
  const Comment = styled(Card)`
    flex-direction: row;
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

  const VoteComment = styled(Vote)`
    flex-direction: column;
    width: 40;
    margin: 0;
    padding: 0;
    height: 100px;
    margin-right: 12px;
  `;

  const RightSide = styled(View)`
  `

  // console.log(other)
  return (
    <Comment>
      <VoteComment rating={10}></VoteComment>
      <RightSide>
        <UserName>{user.name}</UserName>
        <CommentText>{text}</CommentText>
      </RightSide>
    </Comment>
  );
};
