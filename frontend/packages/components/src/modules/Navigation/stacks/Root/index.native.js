import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export const Root = createBottomTabNavigator();

export const RootNavigator = ({ children, ...props }) => {
  return <Root.Navigator {...props}>{children}</Root.Navigator>;
};
