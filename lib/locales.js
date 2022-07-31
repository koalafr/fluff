import en from "../locales/en";
import fr from "../locales/fr";

// Import more locales here and update the logic with a switch statement
export const getTranslation = ({ locale }) => {
  return locale === "en" ? en : fr;
};

export const available_locales = ["en", "fr"];
