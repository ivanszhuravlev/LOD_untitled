import React from "react";
import styled from "styled-components/native";
import { Card } from "../../components/Card/Card";
import { CommentsList } from "../../components/Comment/CommentsList";
import { IdeaTop } from "../Idea/IdeaTop";
import { TextInput } from '../../components/TextInput/TextInput';
import { View, Button, Text } from 'react-native';
import { Title } from '../../components/Title/Title';

export const CreateIdea = ({ idea }) => {
  const Form = styled(Card)`
    width: 80%;
  `
  const FormTitle = styled(Title)`
    // padding-bottom: 20px;

  `;

  const SubmitButton = styled(Button)`
  `;


  return (
    <>
    <FormTitle>Создать идею</FormTitle>
    <Form>
      <TextInput label="Заголовок" placeholder="Введите заголовок"/>
      <TextInput label="Описание" placeholder="Введите описание"/>
      <SubmitButton title={"Создать"}></SubmitButton>
    </Form>
    </>
  );
};
