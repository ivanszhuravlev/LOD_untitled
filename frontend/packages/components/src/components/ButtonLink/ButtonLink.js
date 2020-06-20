import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation, Link, useLinkProps, StackActions } from "@react-navigation/native";

const Button = styled(TouchableOpacity)``;

export const ButtonLink = ({ href, children, ...componentProps }) => {
  const { onPress, ...props } = useLinkProps({
    // to: href,
    action: StackActions.push("idea", { id: 2 }),
  });
  console.log("href", href);
  return (
    <Button {...props} {...componentProps} onPress={onPress}>
      {children}
    </Button>
  );
};
