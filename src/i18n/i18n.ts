import * as RNLocalize from "react-native-localize";
import { I18n } from "i18n-js";

import en from "./translations/en.json";
import es from "./translations/es.json";

const translations = { en, es };

const { languageTag } = RNLocalize.findBestLanguageTag(
  Object.keys(translations),
) || { languageTag: "en" };

const i18n = new I18n(translations);

i18n.enableFallback = true;
i18n.locale = languageTag;

export default i18n;
