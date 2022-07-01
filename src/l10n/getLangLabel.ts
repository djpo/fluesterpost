import { langLabels } from "./langLabels";
import { InterfaceLang } from "./interfaceLangs";
import type { Language } from "../types";

const interfaceLang = InterfaceLang.EN;

export function getLangLabel(langCode: Language) {
  if (langLabels[langCode]) {
    if (langLabels[langCode][interfaceLang]) {
      return langLabels[langCode][interfaceLang];
    }
    return langCode;
  }
  return langCode;
}
