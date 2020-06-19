import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screens } from "../../constants";
import { HomeScreen } from "../../../../pages/Home";

const Home = createStackNavigator();

export const HomeStack = () => {
  return (
    <Home.Navigator>
      <Home.Screen name={Screens.Home} component={HomeScreen} />
    </Home.Navigator>
  );
};
