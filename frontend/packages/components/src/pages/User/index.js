import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { User } from "../../modules/User/User";
import { useDispatch } from "react-redux";
import { fetchIdeasListAction } from "../../redux/actions/idea";
import { Block } from "../../components/Block/Block";

export const UserScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIdeasListAction());
  }, []);

  return (
    <Block>
      <User />
    </Block>
  );
};
