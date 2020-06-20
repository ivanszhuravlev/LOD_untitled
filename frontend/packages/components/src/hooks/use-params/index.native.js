import { useNavigation } from "@react-navigation/native";

export const useParams = (param) => {
  const navigation = useNavigation();
  return navigation.params;
};
