import React from "react";
import { LeaderboardList } from "../LeaderboardList/LeaderboardList";
import { Block } from "../../components/Block/Block";
import { Title } from "../../components/Title/Title";
import { Separator } from "../../components/Separator/Separator";

export const Leaderboard = () => {
  return (
    <Block>
      <Title>Leaderboard</Title>
      <Separator />
      <LeaderboardList />
    </Block>
  );
};
