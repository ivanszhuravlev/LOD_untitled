import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screens } from "../../constants";
import { DashboardScreen } from "../../../../pages/Dashboard";

const Dashboard = createStackNavigator();

export const DashboardStack = () => {
  return (
    <Dashboard.Navigator>
      <Dashboard.Screen name={Screens.Dashboard} component={DashboardScreen} />
    </Dashboard.Navigator>
  );
};
