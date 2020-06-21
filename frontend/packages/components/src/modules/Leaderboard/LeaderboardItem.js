import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Card } from "../../components/Card/Card";
import { TitleCard } from "../../components/Title/Title";
import { Tag } from "../../components/Rating/Rating";
import { Image, View } from "react-native";


export const LeaderboardItem = ({ id, name, rating, num, avatarUri, ...other }) => {

  const IdeaCard = styled(Card)`
    flex-direction: row;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    padding: ${({ theme }) => theme.paddingMedium}px;
  `;

  const AvatarImage = styled(Image)`
    height: 50px;
    width: 50px;
    resize-mode: contain;
    border-radius: 100%;
    margin-right: 10px;
  `;

  const UserView = styled(View)`
    flex-direction: row;
  `;

  console.log(other)

  return (
    <IdeaCard>
      <Tag>{num}</Tag>
      <UserView>
        <AvatarImage source={avatarUri} />
        <TitleCard>{name}</TitleCard>
      </UserView>
      <Tag>+{rating}</Tag>
    </IdeaCard>
  );
};
