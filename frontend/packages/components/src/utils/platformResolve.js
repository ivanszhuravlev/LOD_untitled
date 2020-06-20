import { Platform } from "react-native";

export const platformResolve = (nativeOption, webOption) =>
  Platform.select({
    web: webOption,
    default: nativeOption,
  });
