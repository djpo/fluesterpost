import { Language } from "@/types";

export const getRandomLang = (langs: Language[]): Language =>
  langs[Math.floor(Math.random() * langs.length)];
