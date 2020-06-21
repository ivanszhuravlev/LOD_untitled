import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Home } from "../../modules/Home/";
import { useDispatch } from "react-redux";
import { fetchIdeasListAction } from "../../redux/actions/idea";
import { fetchChallengesListAction } from "../../redux/actions/challenge";
import { Block } from "../../components/Block/Block";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('HOME')
    dispatch(fetchIdeasListAction());
    dispatch(fetchChallengesListAction());
  }, []);

  return (
    <Block>
      <Home />
    </Block>
  );
};
