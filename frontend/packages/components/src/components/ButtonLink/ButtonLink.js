import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Link } from "@react-navigation/native";

const Button = styled(View)``;

export const ButtonLink = ({ href, children, ...props }) => {
  return (
    <Button {...props}>
      <Link to={href}>{children}</Link>
    </Button>
  );
};
