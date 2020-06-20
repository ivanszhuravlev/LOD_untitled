import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screens } from "../../constants";
import { LeaderboardScreen } from "../../../../pages/Leaderboard";
import { IdeaScreen } from "../../../../pages/Idea";
import { getScreenOptions } from "../../screenOptions";

const Leaderboard = createStackNavigator();

export const LeaderboardStack = () => {
  return (
    <Leaderboard.Navigator screenOptions={getScreenOptions()}>
      <Leaderboard.Screen name={Screens.Leaderboard} component={LeaderboardScreen} />
      <Leaderboard.Screen name={Screens.Idea} component={LeaderboardScreen} />
    </Leaderboard.Navigator>
  );
};
