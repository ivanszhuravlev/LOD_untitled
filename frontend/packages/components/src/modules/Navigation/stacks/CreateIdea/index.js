import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screens } from "../../constants";
import { CreateIdeaScreen } from "../../../../pages/CreateIdea";
import { IdeaScreen } from "../../../../pages/Idea";
import { getScreenOptions } from "../../screenOptions";

const CreateIdea = createStackNavigator();

export const CreateIdeaStack = () => {
  return (
    <CreateIdea.Navigator screenOptions={getScreenOptions()}>
      <CreateIdea.Screen name={Screens.CreateIdea} component={CreateIdeaScreen} />
      <CreateIdea.Screen name={Screens.Idea} component={CreateIdeaScreen} />
    </CreateIdea.Navigator>
  );
};
