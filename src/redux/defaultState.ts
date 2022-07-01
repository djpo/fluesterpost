import type { Language, TranslationText, Step, ErrorMessage } from "../types";

export const defaultSupportedLangs: Language[] = [
  "am",
  "ar",
  "az",
  "be",
  "bg",
  "bn",
  "bs",
  "ca", //
  "ceb", //
  "co",
  "cs",
  "cy",
  "da",
  "de",
  "el", //
  "en",
  "eo",
  "es",
  "et",
  "eu",
  "fa",
  "fi",
  "fr",
  "fy",
  "ga",
  "gd", //
  "gl",
  "gu",
  "ha",
  "haw", //
  "he",
  "hi",
  "hmn", //
  "hr",
  "ht", //
  "hu",
  "hy",
  "id",
  "ig",
  "is",
  "it",
  "iw", //
  "ja",
  "jw", //
  "ka",
  "kk",
  "km",
  "kn",
  "ko",
  "ku",
  "ky",
  "la",
  "lb", //
  "lo",
  "lt",
  "lv",
  "mg",
  "mi",
  "mk",
  "ml",
  "mn",
  "mr",
  "ms",
  "mt",
  "my",
  "ne",
  "nl", //
  "no",
  "ny", //
  "or",
  "pa", //
  "pl",
  "ps", //
  "pt",
  "ro", //
  "ru",
  "rw",
  "sd",
  "si", //
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sq",
  "sr",
  "st", //
  "su",
  "sv",
  "sw",
  "ta",
  "te",
  "tg",
  "th",
  "tk",
  "tl",
  "tr",
  "tt",
  "ug", //
  "uk",
  "ur",
  "uz",
  "vi",
  "xh",
  "yi",
  "yo",
  "zh",
  "zh-CN", //
  "zh-TW", //
  "zu",
];

export const defaultOriginLang: Language = defaultSupportedLangs[15]; // en

export const defaultOriginText: TranslationText = "translate me, if you dare";

export const defaultSteps: Step[] = [
  {
    lang: defaultSupportedLangs[13], // de
    text: "",
    isFetching: false,
  },
  {
    lang: defaultSupportedLangs[22], // fr
    text: "",
    isFetching: false,
  },
  {
    lang: defaultSupportedLangs[15], // en
    text: "",
    isFetching: false,
  },
];

export const defaultErrorMessage: ErrorMessage = "";
