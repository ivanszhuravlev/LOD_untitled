import React from "react";
import { Card } from "../../components/Card/Card";
import { Separator } from "../../components/Separator/Separator";
import { Title } from "../../components/Title/Title";
import { UserView } from "../../components/User/UserView";
import ach from "../../assets/achivments.png";
import { Image } from "react-native";
import styled from "styled-components/native";
import { View } from "react-native";

const AchImage = styled(Image)`
  width: 700px;
  height: 400px;
  resize-mode: contain;
`;

const UserContainer = styled(View)`
  flex-direction: row;
`;

const UserViewStyled = styled(UserView)`
  flex: 1;
  height: 700px;
`;

const AchivmentCard = styled(Card)`
  margin-left: 16px;
`;

export const User = () => {
  return (
    <View>
      <Card>
        <Title>Профиль</Title>
        <Separator />
      </Card>
      <UserContainer>
        <UserViewStyled/>
        <AchivmentCard>
          <Title>Достижения</Title>
          <Separator />
          <AchImage source={ach} />
        </AchivmentCard>
      </UserContainer>
    </View>
  );
};
