import React from "react";
import { View, Text, FlatList } from "react-native";
import { Comment } from "../../components/Comment/Comment";
import { selectIdeas } from "../../redux/selectors/ideas";
import { useSelector } from "../../hooks/use-selector/use-selector";

const commentsList = [
  {
      "id": 1,
      "user": {
          "id": 1,
          "created_at": "2020-06-20T02:01:27.843448Z",
          "deleted_at": null,
          "is_archieved": false,
          "tags": [],
          "name": 'David Indzhiev'
      },
      "text": "this is really stupid idea",
      "idea": 2
  },
  {
    "id": 2,
    "user": {
        "id": 1,
        "created_at": "2020-06-20T02:01:27.843448Z",
        "deleted_at": null,
        "is_archieved": false,
        "tags": [],
        "name": 'David Indzhiev'
    },
    "text": "second comment",
    "idea": 2
}
]

export const CommentsList = () => {
  const renderItem = ({ item: { text, id, user } = {} }) => (
    <Comment text={text} id={id} user={user} />
  );
  const keyExtractor = ({ id } = {}) => `ideaItem-${id}`;
  // const comments = useSelector(selectComments);
  const comments = commentsList
  return (
    <FlatList
      data={comments}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
};
