import React from "react";
import { Tag } from "../../components/Tag/Tag";
import styled from "styled-components/native";
import { View } from "react-native";

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: ${({theme}) => theme.paddingSmall}px 0;
`;

export const TagsList = ({ tags = [] }) => {
  return (
    <Wrapper>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.id} />
      ))}
    </Wrapper>
  );
};
