import React from "react";
import styled from "styled-components/native";
import {
  useNavigation,
  Link,
  useLinkProps,
  StackActions,
} from "@react-navigation/native";

const Button = styled(Link)``;

export const ButtonLink = ({ href, children, ...props }) => {
  return (
    <Button to={href} {...props}>
      {children}
    </Button>
  );
};
