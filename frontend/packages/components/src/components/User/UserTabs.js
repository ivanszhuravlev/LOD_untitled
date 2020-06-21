import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const UserTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Комментарии" component={HomeScreen} />
      <Tab.Screen name="Идеи" component={SettingsScreen} />
      <Tab.Screen name="Достижения" component={SettingsScreen} />
    </Tab.Navigator>
  );
}