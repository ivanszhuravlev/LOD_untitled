import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Text, Button, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard } from "../../components/Title/Title";
import { Image } from "react-native";
import avatar from "../../assets/avatar.png";

const Number = styled(Text)`
  font-size: ${({theme}) => theme.fontSize.button};
  margin-bottom: 4px;
`;

const Desc = styled(Text)`
  font-size: ${({theme}) => theme.fontSize.textSmall};
`;

const Container = styled(View)`
  align-items: center;
`;

export const Statistic = ({ number, desc }) => {
  return (
    <Container>
      <Number>{number}</Number>
      <Desc>{desc}</Desc>
    </Container>
  );
};
