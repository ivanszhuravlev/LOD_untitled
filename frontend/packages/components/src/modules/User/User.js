import React from "react";
import { Card } from "../../components/Card/Card";
import { Separator } from "../../components/Separator/Separator";
import { Title } from "../../components/Title/Title";
import ach from "../../assets/achivments.png";
import { Image } from "react-native";
import styled from "styled-components/native";
import { View } from "react-native";

const AchImage = styled(Image)`
  width: 500px;
  height: 300px;
  resize-mode: contain;
`;

const UserContainer = styled(View)`
  flex-direction: row;
`;

const UserCard = styled(Card)`
  flex: 1;
  heigth: 700px;
  background-color: #ff00ff;
`;

const AchivmentCard = styled(Card)`
  margin-left: 16px;
`;

export const User = () => {
  return (
    <View>
      <Card>
        <Title>User profile</Title>
        <Separator />
      </Card>
      <UserContainer>
        <UserCard />
        <AchivmentCard>
          <AchImage source={{ uri: ach }} />
        </AchivmentCard>
      </UserContainer>
    </View>
  );
};
