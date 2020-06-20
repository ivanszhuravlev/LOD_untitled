import React from "react";
import styled from "styled-components/native";
import { View, Text, FlatList } from "react-native";
import { IdeaItem } from "../Idea/IdeaItem";
import { selectIdeas } from "../../redux/selectors/ideas";
import { useSelector } from "../../hooks/use-selector/use-selector";

const groupIdeas = (ideas) => {
  const even = ideas.filter((_, index) => index % 2 === 0);
  const odd = ideas.filter((_, index) => index % 2 !== 0);
  console.log("divide", even);
  return even.reduce(
    (groups, evenItem, index) => [...groups, [evenItem, odd[index]]],
    []
  );
};

const Row = styled(View)`
  flex-direction: row;
  /* flex: 1; */
  /* justify-content: space-between; */
  /* align-items: stretch; */
  width: 100%;
`;
const EvenIdeaItem = styled(IdeaItem)`
  margin-right: ${({ theme }) => theme.marginCard}px;
`;

export const IdeasList = () => {
  const renderItem = ({ item, index }) => {
    const [even, odd] = item;
    return (
      <Row key={`IdeasTuple-${index}`}>
        <EvenIdeaItem title={even.title} id={even.id} key={even.id} />
        {odd ? <IdeaItem title={odd.title} id={odd.id} key={odd.id} /> : null}
      </Row>
    );
  };
  // const keyExtractor = ({ id } = {}) => `ideaItem-${id}`;
  const ideas = useSelector(selectIdeas);
  const doubleIdeas = groupIdeas(ideas);
  console.log("list", doubleIdeas, ideas);

  return (
    <FlatList
      data={doubleIdeas}
      renderItem={renderItem}
      // keyExtractor={keyExtractor}
      // conta
    />
  );
};
