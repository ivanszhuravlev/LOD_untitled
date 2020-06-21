import React from "react";
import { Card } from "../../components/Card/Card";
import { CommentsList } from "../../components/Comment/CommentsList";
import { Block } from "../../components/Block/Block";
import { IdeaTop } from "../Idea/IdeaTop";

export const Idea = ({ idea }) => {

  return (
    <>
      <Card>
        <IdeaTop idea={idea}/>
      </Card>
      <Block>
        <CommentsList />
      </Block>
    </>
  );
};
