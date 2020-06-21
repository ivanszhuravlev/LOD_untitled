import React from "react";
import styled from "styled-components/native";
import { Card } from "../../components/Card/Card";
import { CommentsList } from "../../components/Comment/CommentsList";
import { IdeaTop } from "../Idea/IdeaTop";
import { TextInput } from '../../components/TextInput/TextInput';
import { View, Button, Text } from 'react-native';
import { Title } from '../../components/Title/Title';
import { Tag } from '../../components/Tag/Tag';

export const CreateIdea = ({ idea }) => {
  const Form = styled(Card)`
    width: 80%;
  `
  const FormTitle = styled(Title)`
    // padding-bottom: 20px;
  `;

  const CustomTag = styled(Tag)`
    margin-bottom: 20px;
  `

  const SubmitButton = styled(Button)`
  `;
  const tag1 = {title: "Программисты"};
  const tag2 = {title: "Бэкофис на Невском"};
  const tag3 = {title: "Санкт-Петербург"};
  const tag4 = {title: "Все офисы"};


  return (
    <>
    <FormTitle>Создать идею</FormTitle>
    <Form>
      <TextInput label="Заголовок" placeholder="Введите заголовок"/>
      <TextInput label="Описание" placeholder="Введите описание"/>
      <CustomTag tag={tag1}></CustomTag>
      <CustomTag tag={tag2}></CustomTag>
      <CustomTag tag={tag3}></CustomTag>
      <CustomTag tag={tag4}></CustomTag>
      <SubmitButton title={"Создать"}></SubmitButton>
    </Form>
    </>
  );
};
