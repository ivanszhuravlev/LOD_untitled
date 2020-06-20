import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

export const Root = createDrawerNavigator();

const screenOptions = {
  headerShown: false
}

export const RootNavigator = ({ children, ...props }) => {
  return (
    <Root.Navigator
      {...props}
      openByDefault={true}
      drawerType={"permanent"}
      screenOptions={screenOptions}
    >
      {children}
    </Root.Navigator>
  );
};
