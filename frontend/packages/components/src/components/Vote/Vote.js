import React from "react";
import styled from "styled-components/native";
import { Text, View, Button } from "react-native";


export const Vote = ({ ...props }) => {
  const { rating } = props;
  const Vote = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    padding: ${({ theme }) => theme.paddingMedium}px;
  `;
    return (
      <Vote {...props}>
        <Button title={"up"} />
        <Text>{ rating }</Text>
        <Button title={"downn"} />
      </Vote>
    );
};
