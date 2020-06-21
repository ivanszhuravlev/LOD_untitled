import React from "react";
import { LeaderboardList } from "../LeaderboardList/LeaderboardList";
import { Block } from "../../components/Block/Block";
import { Title } from "../../components/Title/Title";
import { Separator } from "../../components/Separator/Separator";
import { Card } from "../../components/Card/Card";

export const Leaderboard = () => {
  return (
    <>
      <Card>
        <Title>Лидеры</Title>
        <Separator />
      </Card>
      <LeaderboardList />
    </>
  );
};
