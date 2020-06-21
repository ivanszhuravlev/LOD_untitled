import React from "react";
import styled from "styled-components/native";
import { TextInput as rnTextInput, Text } from "react-native";
import { Label } from "../Label/Label";

export const FormInput = ({ ...props }) => {
  const TextInput = styled(rnTextInput)`
    borderColor: 'black',
    borderWidth: 1px,
  `;

    return (
      <>
        <FormInput>
          <Label text={"text"}></Label>
          <TextInput {...props} placeholder="Type here to translate!"/>
        </FormInput>
      </>
    );
};


// <label for="title">Title</label>
// <input type="text" name="" id="title"/>