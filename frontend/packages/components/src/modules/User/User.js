import React from "react";
import { Card } from "../../components/Card/Card";
import { Separator } from "../../components/Separator/Separator";
import { Title } from "../../components/Title/Title";

export const User = () => {
  return (
    <Card>
      <Title>User profile</Title>
      <Separator/>
      <UserView/>
    </Card>
  );
};
