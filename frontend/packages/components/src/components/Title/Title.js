import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.textBlack};
  background-color: #ffffff;
  margin-bottom: ${({ theme }) => theme.marginCard};
`;

// export const H1 = styled(Title)`
//   font-size: ${({ theme }) => theme.fontSize.h1};
// `;

// const Title = styled(Text)`
//   color: ${({ theme }) => theme.colors.textGrey};
// `;

export const TitleCard = styled(Title)`
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const TitleBlue = styled(Title)`
  color: ${({ theme }) => theme.colors.blue};
  line-height: 19;
`;
