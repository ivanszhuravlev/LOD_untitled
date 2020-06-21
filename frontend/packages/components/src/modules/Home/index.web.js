import React from "react";
import styled from "styled-components/native";
import { View, Text, Button } from "react-native";
import { Search } from '../../components/Search/Search';
import { IdeasList } from "../IdeasList";
import { ChallengesList } from "../ChallengesList/ChallengesList";
import { Block } from "../../components/Block/Block";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { Title } from "../../components/Title/Title";
import { Screens, getLink } from "../Navigation/constants";
import { Card } from "../../components/Card/Card";

// const Link = styled(ButtonLink)``;
const Container = styled(View)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  height: 100%;
`;

export const Home = () => {
  const href = getLink(Screens.Idea, { create: "create" });

  return (
    <>
      <ButtonLink to={href}>
        <Text>Add link</Text>
        </ButtonLink>
      <Card>
        <Search />
      </Card>
      <Container>
        <IdeasList />
        <ChallengesList />
      </Container>
    </>
  );
};