import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screens } from "../../constants";
import { UserScreen } from "../../../../pages/User";
import { IdeaScreen } from "../../../../pages/Idea";
import { getScreenOptions } from "../../screenOptions";

const User = createStackNavigator();

export const UserStack = () => {
  return (
    <User.Navigator screenOptions={getScreenOptions()}>
      <User.Screen name={Screens.User} component={UserScreen} />
    </User.Navigator>
  );
};
