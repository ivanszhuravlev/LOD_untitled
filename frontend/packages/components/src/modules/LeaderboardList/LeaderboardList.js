import React from "react";
import { View, Text, FlatList } from "react-native";
import { LeaderboardItem } from "../Leaderboard/LeaderboardItem";
import { selectLeaderboardItems } from "../../redux/selectors/leaderboardItems";
import { useSelector } from "../../hooks/use-selector/use-selector";

export const LeaderboardList = () => {
    const renderItem = ({ item: { id, name, rating } = {} }) => (
        <LeaderboardItem id={id} name={name} rating={rating} />
    );
    const keyExtractor = ({ id } = {}) => `ideaItem-${id}`;
    const leaderboardItems = useSelector(selectLeaderboardItems);
    console.log('list leaderboardItems: ', leaderboardItems)
    return (
        <FlatList
            data={leaderboardItems}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
};
