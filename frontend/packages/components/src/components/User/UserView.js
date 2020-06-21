import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Text, Button, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard, TitleBlue } from "../../components/Title/Title";
import { Image } from "react-native";
import { Statistic } from "./Statistic";
import { UserTabs } from "./UserTabs";
import avatar from "../../assets/avatar.png";

const AvatarImage = styled(Image)`
  width: 200px;
  height: 200px;
  resize-mode: contain;
  border-radius: 200px;
  align-self: center;
`;

const StatisticContainer = styled(View)`
  flex-direction: row;
  margin: auto;
  margin-bottom: 10px;
`;

const Separator = styled(View)`
  width: 16px;
  height: 100%;
`;

const UserCard = styled(Card)`
  width: 40%;
  height: 600px;
  align-items: stretch;
`

const Name = styled(TitleBlue)`
  margin-top: ${({theme}) => theme.marginCard}px;
  margin-bottom: ${({theme}) => theme.marginCard}px;
  align-self: center;
`

const UserTabsStyled = styled(UserTabs)`
  margin-top: 10px;
`

export const UserView = () => {
  return (
    <UserCard>
      <AvatarImage source={avatar} />
      <Name>Давид</Name>
      <StatisticContainer>
        <Statistic number={2} desc={"рейтинг"} />
        <Separator />
        <Statistic number={13} desc={"коментариев"} />
        <Separator />
        <Statistic number={1} desc={"идей предложено"} />
        <Separator />
        <Statistic number={0} desc={"идей реализовано"} />
      </StatisticContainer>
      <UserTabs />
    </UserCard>
  );
};
