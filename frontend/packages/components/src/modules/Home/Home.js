import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { IdeasList } from "../IdeasList";
import { Block } from "../../components/Block/Block";
import { Title } from "../../components/Title/Title";

const HomeTitle = styled(Title)`
  margin-bottom: ${({ theme }) => theme.marginCard};
`;

export const Home = () => {
  return (
    <>
      <HomeTitle>Home component</HomeTitle>
      <IdeasList />
    </>
  );
};
