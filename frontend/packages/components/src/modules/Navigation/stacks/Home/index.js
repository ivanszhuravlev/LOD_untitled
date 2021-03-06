import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screens } from "../../constants";
import { HomeScreen } from "../../../../pages/Home";
import { IdeaScreen } from "../../../../pages/Idea";
import { getScreenOptions } from "../../screenOptions";

const Home = createStackNavigator();

export const HomeStack = () => {
  return (
    <Home.Navigator screenOptions={getScreenOptions()}>
      <Home.Screen name={Screens.Home} component={HomeScreen} />
      <Home.Screen name={Screens.Idea} component={IdeaScreen} />
    </Home.Navigator>
  );
};
