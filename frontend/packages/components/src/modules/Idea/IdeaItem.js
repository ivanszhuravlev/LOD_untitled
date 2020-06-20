import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { Card } from "../../components/Card/Card";
import { H1 } from "../../components/Title/Title";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../Navigation/constants";

export const IdeaItem = ({ title, id }) => {
  const navigation = useNavigation();

  const handleLinkPress = useCallback(() => {
    navigation.navigate(Screens.Idea, { id });
  }, []);

  return (
    <Card>
      <H1>{title}</H1>
      <ButtonLink
        type={"outline"}
        title={"GO to idea"}
        onPress={handleLinkPress}
      />
    </Card>
  );
};
