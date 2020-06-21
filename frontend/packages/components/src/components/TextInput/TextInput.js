import React from "react";
import styled from "styled-components/native";
import { TextInput as rnTextInput, Text, View } from "react-native";


export const TextInput = ({ ...props }) => {
  const { label, placeholder } = props;
  const Input = styled(View)`
    padding-bottom: 35px;
    width: 100%;
  `;
  const TextInput = styled(rnTextInput)`
    borderColor: 'black',
    borderWidth: 1px,
    height: 25px;
  `;
  const Label = styled(Text)`
    color: gray;
    font-size: 12px;
    padding-bottom: 5px;
  `;

    return (
      <Input>
        <Label>{label}</Label>
        <TextInput {...props} placeholder={placeholder}/>
      </Input>
    );
};
