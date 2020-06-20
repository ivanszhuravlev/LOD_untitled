import { useSelector as useSelectorDump } from "react-redux";
import { isEqual } from "lodash";

export const useSelector = (selector) => {
  return useSelectorDump(selector, isEqual);
};
