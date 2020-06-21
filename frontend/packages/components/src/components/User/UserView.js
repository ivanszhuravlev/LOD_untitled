import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Text, Button, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard } from "../../components/Title/Title";
import { Image } from "react-native";
import { Statistic } from "./Statistic";
import { UserTabs } from "./UserTabs";
import avatar from "../../assets/avatar.png";

const AvatarImage = styled(Image)`
  width: 200px;
  height: 200px;
  resize-mode: contain;
  border-radius: 100%;
`;

const StatisticContainer = styled(View)`
  flex-direction: row;
`;

const Separator = styled(View)`
  width: 1px;
  background-color: #ff00ff;
  height: 100%;
`;

export const UserView = () => {
    return (
        <Card>
            <AvatarImage source={avatar} />
            <Text>Давид</Text>
            <StatisticContainer>
                <Statistic number={0} desc={'рейтинг'} />
                <Separator />
                <Statistic number={0} desc={'коментариев'} />
                <Separator />
                <Statistic number={0} desc={'идей предложено'} />
                <Separator />
                <Statistic number={0} desc={'идей реализовано'} />
            </StatisticContainer>
            <UserTabs/>
        </Card>
    );
};
