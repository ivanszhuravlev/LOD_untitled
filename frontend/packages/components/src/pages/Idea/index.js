import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Idea } from "../../modules/Idea/Idea";
import { selectIdea } from "../../redux/selectors/ideas";
import { useParams } from "../../hooks/use-params";
import { useSelector } from "../../hooks/use-selector/use-selector";
import { useDispatch } from "react-redux";
import { fetchIdeaAction } from "../../redux/actions/idea";
import { Block } from "../../components/Block/Block";

export const IdeaScreen = () => {
  const { id } = useParams("id");
  const idea = useSelector((state) => selectIdea(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!idea.id) dispatch(fetchIdeaAction(id));
  }, [idea.id]);

  return (
    <Block>
      <Idea idea={idea} />
    </Block>
  );
};
