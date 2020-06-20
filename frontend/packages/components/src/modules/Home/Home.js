import React from "react";
import styled from "styled-components/native";
import { View, Text, Button } from "react-native";
import { IdeasList } from "../IdeasList/IdeasList";
import { ChallengesList } from "../ChallengesList/ChallengesList";
import { Block } from "../../components/Block/Block";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { Title } from "../../components/Title/Title";
import { Screens, getLink } from "../Navigation/constants";

const HomeTitle = styled(Title)`
  margin-bottom: ${({ theme }) => theme.marginCard};
`;

const Link = styled(ButtonLink)``;
const Container = styled(View)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  // flex:1;
`;

export const Home = () => {
  const href = getLink(Screens.Idea, {'create': 'create'});

  return (
    <Container>
      <Link to={href}><Text>Add link</Text></Link>
      <IdeasList />
      <ChallengesList />
    </Container>
  );
};
