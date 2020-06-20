import React from "react";
import { View, Text } from "react-native";
import { IdeasList } from "../IdeasList/IdeasList";
import { Block } from "../../components/Block/Block";
import { Title } from "../../components/Title/Title";

export const Home = () => {
  return (
    <>
      <Title>Home component</Title>
      <IdeasList />
    </>
  );
};
