import React from "react";
// import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Root } from "./stacks/Root";
import { Screens } from "./constants";
import { DashboardStack } from "./stacks/Dashboard";
import { HomeStack } from "./stacks/Home";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName={Screens.Home}>
        <Root.Screen name={Screens.Home} component={HomeStack} />
        <Root.Screen name={Screens.Dashboard} component={DashboardStack} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
