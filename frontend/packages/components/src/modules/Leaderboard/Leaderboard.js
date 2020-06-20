import React from "react";
import { View, Text } from "react-native";
import { LeaderboardList } from "../LeaderboardList/LeaderboardList";
import { Block } from "../../components/Block/Block";
import { Title } from "../../components/Title/Title";

export const Leaderboard = () => {
  return (
    <Block>
      <Title>Leaderboard component</Title>
      <LeaderboardList />
    </Block>
  );
};
