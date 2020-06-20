import { platformResolve } from "../../utils/platformResolve";

export const getScreenOptions = () => {
  const headerShown = platformResolve(true, false);

  return { headerShown };
};
