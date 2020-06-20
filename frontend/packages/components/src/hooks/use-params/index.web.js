import { useNavigation } from "@react-navigation/native";

export const useParams = () => {
  const navigation = useNavigation();
  const routes = navigation.dangerouslyGetState().routes
  
  return routes[routes.length - 1].params;
};
