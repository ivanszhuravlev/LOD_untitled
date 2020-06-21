import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Card } from "../../components/Card/Card";
import { Tag } from "../../components/Rating/Rating";
import { Image, View } from "react-native";
import { RoundIconNum } from "../../components/Icon/RoundIcon";

export const LeaderboardItem = ({
  id,
  name,
  rating,
  num,
  avatarUri,
  ...other
}) => {
  const IdeaCard = styled(Card)`
    flex-direction: row;
    align-items: center;
    width: 50%;
    justify-content: flex-start;
    padding: ${({ theme }) => theme.paddingMedium}px;
  `;

  const AvatarImage = styled(Image)`
    height: 50px;
    width: 50px;
    resize-mode: contain;
    border-radius: 150px;
    margin-right: 16px;
    margin-left: 16px;
  `;

  const UserView = styled(View)`
    flex-direction: row;
    align-items: center;
    flex: 1;
  `;

  const Title = styled(Text)`
    font-size: ${({ theme }) => theme.fontSize.smallTitle};
    color: ${({ theme }) => theme.colors.textGrey};
    line-height: ${({ theme }) => theme.fontSize.smallTitle};
  `;

  return (
    <IdeaCard>
      <RoundIconNum num={num} />
      <UserView>
        <AvatarImage source={avatarUri} />
        <Title>{name}</Title>
      </UserView>
      <Tag>+{rating}</Tag>
    </IdeaCard>
  );
};
