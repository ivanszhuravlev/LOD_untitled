import React from "react";
import { Tag } from "../../components/Tag/Tag";
import styled from "styled-components/native";
import { View } from "react-native";

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${({ theme }) => theme.paddingSmall}px;
`;

export const TagsList = ({ tags = [], ...props }) => {
  return (
    <Wrapper {...props}>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.id} />
      ))}
    </Wrapper>
  );
};
