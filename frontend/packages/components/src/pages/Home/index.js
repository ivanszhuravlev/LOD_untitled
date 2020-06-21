import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Home } from "../../modules/Home/";
import { useDispatch } from "react-redux";
import { fetchIdeasListAction } from "../../redux/actions/idea";
import { Block } from "../../components/Block/Block";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('HOME')
    dispatch(fetchIdeasListAction());
  }, []);

  return (
    <Block>
      <Home />
    </Block>
  );
};
