import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Home } from "../../modules/Home/Home";
import { useDispatch } from "react-redux";
import { fetchIdeasListAction } from "../../redux/actions/idea";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIdeasListAction());
  }, []);

  return <Home />;
};
