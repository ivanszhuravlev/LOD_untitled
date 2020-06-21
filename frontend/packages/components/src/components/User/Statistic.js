import React, { useCallback } from "react";
import styled from "styled-components/native";
import { Text, Button, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard } from "../../components/Title/Title";
import { Image } from "react-native";
import avatar from "../../assets/avatar.png";

const Number = styled(Text)`
  font-size: 15;
`;

const Desc = styled(Text)`
    font-size: 8;
`;

export const Statistic = ({ number, desc }) => {
    return (
        <View>
            <Number>{number}</Number>
            <Desc>{desc}</Desc>
        </View>
    );
};
