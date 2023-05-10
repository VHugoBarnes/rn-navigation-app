import { createContext, useContext } from "react";

interface LanguageContextValue {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => { },
});

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
