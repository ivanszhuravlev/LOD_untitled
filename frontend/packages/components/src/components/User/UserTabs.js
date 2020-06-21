import * as React from "react";
import styled from "styled-components/native";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return <View></View>;
}

function SettingsScreen() {
  return <View></View>;
}

const Tab = createBottomTabNavigator();

const TabBarContainer = styled(View)`
  flex-direction: row;
  /* background-color: #ff00ff; */
  flex: 1;
  align-self: stretch;
  padding: 0;
`;

const TabButton = styled(TouchableOpacity)`
  color: ${({ theme }) => theme.colors.textGrey};
  flex: 1;
  /* height: 100%; */
`;

const TabLabel = styled(Text)`
  color: ${({ theme }) => theme.colors.textGrey};
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.blue : theme.colors.textGrey};
  text-align: center;
`;

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <TabBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabButton onPress={onPress}>
            <TabLabel isFocused={isFocused}>{label}</TabLabel>
          </TabButton>
        );
      })}
    </TabBarContainer>
  );
};

export const UserTabs = () => {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen name="Комментарии" component={HomeScreen} />
      <Tab.Screen name="Мои идеи" component={SettingsScreen} />
      <Tab.Screen name="Сохраненные идеи" component={SettingsScreen} />
      <Tab.Screen name="Достижения" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
