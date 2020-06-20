import React from "react";
// import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator, Root } from "./stacks/Root";
import { Screens, linking } from "./constants";
import { DashboardStack } from "./stacks/Dashboard";
import { HomeStack } from "./stacks/Home";
import { LeaderboardStack } from "./stacks/Leaderboard";

export const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator initialRouteName={Screens.Home}>
        <Root.Screen name={Screens.Home} component={HomeStack} />
        <Root.Screen name={Screens.Dashboard} component={DashboardStack} />
        <Root.Screen name={Screens.Leaderboard} component={LeaderboardStack} />
        <Root.Screen name={Screens.IdeaCreate} component={LeaderboardStack} />
      </RootNavigator>
    </NavigationContainer>
  );
};
