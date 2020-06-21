import React from "react";
import styled from "styled-components/native";
import { View, Text, Button } from "react-native";
import { IdeasList } from "../IdeasList/";
import { Screens, getLink } from "../Navigation/constants";

const Container = styled(View)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  height: 100%;
  /* background-color: #ff00ff; */
`;

export const Home = () => {
  return (
    <Container>
      <IdeasList />
      {/* <ChallengesList /> */}
    </Container>
  );
};
