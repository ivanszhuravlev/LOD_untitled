import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { selectIdeas } from "../../redux/selectors/ideas";
import { useSelector } from "../../hooks/use-selector/use-selector";
import { Card } from "../../components/Card/Card";
import { Separator } from "../../components/Separator/Separator";
import { Title } from "../../components/Title/Title";
import styled, { useTheme } from "styled-components/native";

import Interactable from "../Idea/Interactable";
import Animated from "react-native-reanimated";
import { Idea } from "../Idea";
import { NoIdea } from "../Idea/NoIdea";
import { Loader } from "../../components/Loader/Loader";
import {
  DislikeIndicator,
  LikeIndicator,
} from "../../components/SwipeStateIndicator/SwipeStateIndicator";

const { Value, interpolate, concat, Extrapolate } = Animated;
const { width, height } = Dimensions.get("window");
const phi = (1 + Math.sqrt(5)) / 2;
const deltaX = width / 2;
const w = width - 32;
const h = w * phi;
const alpha = Math.PI / 12;
const A = width * Math.cos(alpha) + height * Math.sin(alpha);

const AbsoluteLoader = styled(Loader)`
  position: absolute;
  width: 100%;
`;

const Overlay = styled(View)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 16px;

  position: absolute;
  top: 0;
  left: 0;
`;

const OverlayIdea = ({ ...props }) => {
  return (
    <View style={{ flex: 1 }}>
      <Idea {...props} />
      <Overlay />
    </View>
  );
};

const IndicatedIdea = ({ likeOpacity, dislikeOpacity, ...props }) => {
  return (
    <View style={{ flex: 1 }}>
      <Idea {...props} />
      <LikeIndicator opacity={likeOpacity} />
      <DislikeIndicator opacity={dislikeOpacity} />
    </View>
  );
};

const ListComponent = ({ ideas }) => {
  const [index, setIndex] = useState(0);

  const onSnap = ({ nativeEvent: { x } }) => {
    if (x !== 0) {
      setIndex(index + 1);
    }
  };

  const x = useMemo(() => new Value(0), []);
  const y = useMemo(() => new Value(0), []);
  const item = ideas[index];

  const rotateZ = concat(
    interpolate(x, {
      inputRange: [-1 * deltaX, deltaX],
      outputRange: [alpha, -1 * alpha],
      extrapolate: Extrapolate.CLAMP,
    }),
    "rad"
  );

  const translateX = x;
  const translateY = y;
  const style = {
    ...StyleSheet.absoluteFillObject,
    transform: [{ translateX }, { translateY }, { rotateZ }],
    height: "100%",
  };
  const likeOpacity = interpolate(x, {
    inputRange: [0, deltaX / 4],
    outputRange: [0, 1],
  });
  const dislikeOpacity = interpolate(x, {
    inputRange: [(-1 * deltaX) / 4, 0],
    outputRange: [1, 0],
  });

  return (
    <View style={{ flex: 1, height: "100%" }}>
      {ideas[index + 1] ? (
        <OverlayIdea idea={ideas[index + 1] || {}} />
      ) : (
        <NoIdea />
      )}
      {ideas[index] ? (
        <>
          <AbsoluteLoader />
          <Animated.View {...{ style }}>
            <IndicatedIdea
              idea={item}
              likeOpacity={likeOpacity}
              dislikeOpacity={dislikeOpacity}
            />
          </Animated.View>
        </>
      ) : null}
      <Interactable
        key={index}
        snapPoints={[{ x: -1 * A }, { x: 0 }, { x: A }]}
        style={StyleSheet.absoluteFill}
        {...{ onSnap, x, y }}
      />
    </View>
  );
};

export const IdeasList = () => {
  const ideas = useSelector(selectIdeas);

  return ideas.length ? <ListComponent ideas={ideas} /> : <Loader />;
};
