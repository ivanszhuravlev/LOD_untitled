import React, { useEffect } from "react";
import { Leaderboard } from "../../modules/Leaderboard/Leaderboard";
import { Block } from "../../components/Block/Block";
import { useDispatch } from "react-redux";
import { fetchLeaderboardItemsListAction } from "../../redux/actions/leaderboardItems";

export const LeaderboardScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeaderboardItemsListAction())
  }, []);

  return (
    <Block>
      <Leaderboard />
    </Block>
  );
};
