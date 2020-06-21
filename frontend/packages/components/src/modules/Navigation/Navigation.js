import React from "react";
// import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator, Root } from "./stacks/Root";
import { Screens, linking } from "./constants";
import { HomeStack } from "./stacks/Home";
import { LeaderboardStack } from "./stacks/Leaderboard";
import { UserStack } from "./stacks/User";
import { CreateIdeaStack } from "./stacks/CreateIdea";


export const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator initialRouteName={Screens.Home}>
        <Root.Screen name={Screens.Home} component={HomeStack} />
        <Root.Screen name={Screens.Leaderboard} component={LeaderboardStack} />
        <Root.Screen name={Screens.User} component={UserStack} />
        <Root.Screen name={Screens.CreateIdea} component={CreateIdeaStack} />
      </RootNavigator>
    </NavigationContainer>
  );
};
