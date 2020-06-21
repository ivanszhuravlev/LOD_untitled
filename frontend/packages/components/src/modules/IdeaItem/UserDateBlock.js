import React, { useCallback } from "react";
import styled from "styled-components/native";
import { View, Image, Text } from "react-native";
import { Card } from "../../components/Card/Card";
import { TitleCard, TitleBlue } from "../../components/Title/Title";
import { Screens, getLink } from "../Navigation/constants";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { TagsList } from "../TagsList/TagsList";
import { getReadableTime } from "../../utils/getReadableTime";
import avatar from "../../assets/avatar2.png";

const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Avatar = styled(Image)`
  border-radius: 100px;
  height: 32px;
  width: 32px;
  resize-mode: cover;
`;

const Name = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.text};
  color: ${({ theme }) => theme.colors.textGrey};
  margin-bottom: 2px;
`;

const DateBlock = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.textSmall};
  color: ${({ theme }) => theme.colors.textGrey};
`;

const Info = styled(View)`
  margin-left: ${({ theme }) => theme.paddingTiny2}px;
`

export const UserDateBlock = ({ date, ...props }) => {
  return (
    <Container {...props}>
      <Avatar source={avatar} />
      <Info>
        <Name>Дмитрий Демьянов</Name>
        <DateBlock>{date}</DateBlock>
      </Info>
    </Container>
  );
};
