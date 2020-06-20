import React from "react";
import { View, Text, FlatList } from "react-native";
import { LeaderboardItem } from "../Leaderboard/LeaderboardItem";
import { selectLeaderboardItems } from "../../redux/selectors/leaderboardItems";
import { useSelector } from "../../hooks/use-selector/use-selector";

export const LeaderboardList = () => {
    const renderItem = ({ item: { id, num, name, rating } = {} }) => (
        <LeaderboardItem id={id} num={num} name={name} rating={rating} />
    );
    const keyExtractor = ({ id } = {}) => `ideaItem-${id}`;
    let num = 0;
    const leaderboardItems = useSelector(selectLeaderboardItems).sort((a, b) => - a.rating + b.rating).map((item, num) => ({...item, num: num + 1}));
    
    console.log('list leaderboardItems: ', leaderboardItems)
    return (
        <FlatList
            data={leaderboardItems}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
};
