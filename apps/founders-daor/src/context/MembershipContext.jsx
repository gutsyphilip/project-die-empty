import { createContext } from "react";

export const DEFAULT_VALUES = {
  hasClaimedNFT: false,
  initializing: false
};

export const DEFAULT_METHODS = {
  updateContext: () => null,
};

const MembershipContext = createContext({
  ...DEFAULT_VALUES,
  ...DEFAULT_METHODS,
});

MembershipContext.displayName = "MembershipContext";

export default MembershipContext;
