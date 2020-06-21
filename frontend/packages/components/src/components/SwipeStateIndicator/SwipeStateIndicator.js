import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import styled, { useTheme } from "styled-components/native";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";

const containerStyle = {
  padding: 20,
  borderWidth: 3,
  borderRadius: 16,
};

const SwipeStateIndicator = ({ opacity, children, style }) => {
  return (
    <Animated.View style={[containerStyle, style, { opacity }]}>
      {children}
    </Animated.View>
  );
};

const LikeIndicatorStyled = styled(SwipeStateIndicator)`
  border-color: ${({ theme }) => theme.colors.green};

  position: absolute;
  bottom: 24px;
  left: 24px;
`;

const DislikeIndicatorStyled = styled(SwipeStateIndicator)`
  border-color: ${({ theme }) => theme.colors.red};

  position: absolute;
  bottom: 24px;
  right: 24px;
`;

const Label = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.title};
`;

const LikeLabel = styled(Label)`
  color: ${({ theme }) => theme.colors.green};
`;

const DislikeLabel = styled(Label)`
  color: ${({ theme }) => theme.colors.red};
`;

export const LikeIndicator = ({ opacity }) => {
  const theme = useTheme();

  return (
    <LikeIndicatorStyled opacity={opacity}>
      <LikeLabel>Нравится</LikeLabel>
    </LikeIndicatorStyled>
  );
};

export const DislikeIndicator = ({ opacity }) => {
  const theme = useTheme();

  return (
    <DislikeIndicatorStyled opacity={opacity}>
      <DislikeLabel>Не нравится</DislikeLabel>
    </DislikeIndicatorStyled>
  );
};
