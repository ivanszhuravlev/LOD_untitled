import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screens } from "../../constants";
import { DashboardScreen } from "../../../../pages/Dashboard";
import { getScreenOptions } from "../../screenOptions";

const Dashboard = createStackNavigator();

export const DashboardStack = () => {
  return (
    <Dashboard.Navigator screenOptions={getScreenOptions()}>
      <Dashboard.Screen name={Screens.Dashboard} component={DashboardScreen} />
    </Dashboard.Navigator>
  );
};
