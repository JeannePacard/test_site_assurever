import * as ReactGA from "react-ga";

export const initGA = () => {
  const GOOGLE_ANALYTICS_ID = "#";
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize(GOOGLE_ANALYTICS_ID);
  }
};
