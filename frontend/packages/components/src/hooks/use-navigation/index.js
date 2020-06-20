import {
  useNavigation as useNavigationNative,
  StackActions,
} from "@react-navigation/native";
import { platformResolve } from "../../utils/platformResolve";

export const useNavigation = () => {
  const nativeNavigation = useNavigationNative();

  const webNavigationHandler = (params) =>
    nativeNavigation.dispatch(StackActions.push(params));

  const navigate = platformResolve(
    nativeNavigation.navigate,
    webNavigationHandler
  );

  return {
    ...nativeNavigation,
    navigate,
  };
};
