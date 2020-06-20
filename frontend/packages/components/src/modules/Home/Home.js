import React from "react";
import styled from "styled-components/native";
import { View, Text, Button } from "react-native";
import { IdeasList } from "../IdeasList/IdeasList";
import { Block } from "../../components/Block/Block";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { Title } from "../../components/Title/Title";
import { Screens, getLink } from "../Navigation/constants";

const HomeTitle = styled(Title)`
  margin-bottom: ${({ theme }) => theme.marginCard};
`;

const Link = styled(ButtonLink)``;
export const Home = () => {
  const href = getLink(Screens.Idea, {'create': 'create'});

  return (
    <>
      <Link to={href}><Text>Add link</Text></Link>
      <HomeTitle>Home component</HomeTitle>
      <IdeasList />
    </>
  );
};
