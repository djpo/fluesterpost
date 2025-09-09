import type {
  Language,
  TranslationText,
  Step,
  ErrorMessage,
  SavedStep,
} from "@/types";

export const defaultSupportedLangs: Language[] = [
  "am",
  "ar",
  "az",
  "be",
  "bg",
  "bn",
  "bs",
  "ca",
  "ceb",
  "co",
  "cs",
  "cy",
  "da",
  "de",
  "el",
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
  "gd",
  "gl",
  "gu",
  "ha",
  "haw",
  "he",
  "hi",
  "hmn",
  "hr",
  "ht",
  "hu",
  "hy",
  "id",
  "ig",
  "is",
  "it",
  "ja",
  "jv",
  "ka",
  "kk",
  "km",
  "kn",
  "ko",
  "ku",
  "ky",
  "la",
  "lb",
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
  "nl",
  "no",
  "ny",
  "or",
  "pa",
  "pl",
  "ps",
  "pt",
  "ro",
  "ru",
  "rw",
  "sd",
  "si",
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sq",
  "sr",
  "st",
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
  "ug",
  "uk",
  "ur",
  "uz",
  "vi",
  "xh",
  "yi",
  "yo",
  "zh",
  "zh-CN",
  "zh-TW",
  "zu",
];

export const defaultOriginLang: Language = defaultSupportedLangs[15]; // en - English

export const defaultOriginText: TranslationText =
  "whisper to me sweet nothings in the pale moonlight";

export const defaultSteps: Step[] = [
  {
    lang: defaultSupportedLangs[21], // fi - Finnish
    text: "",
    isFetching: false,
  },
  {
    lang: defaultSupportedLangs[98], // uk - Ukrainian
    text: "",
    isFetching: false,
  },
  {
    lang: defaultSupportedLangs[0], // am - Amharic
    text: "",
    isFetching: false,
  },
  {
    lang: defaultSupportedLangs[15], // en - English
    text: "",
    isFetching: false,
  },
];

export const defaultSavedSteps: SavedStep[] = [
  {
    lang: defaultSupportedLangs[15], // en - English
    text: "oh yeah",
  },
  {
    lang: defaultSupportedLangs[98], // uk - Ukrainian
    text: "sumn Ukrainian",
  },
  {
    lang: defaultSupportedLangs[0], // am - Amharic
    text: "sumn Amharic",
  },
  {
    lang: defaultSupportedLangs[15], // en - English
    text: "o yea",
  },
];

export const defaultErrorMessage: ErrorMessage = "";

export const defaultAreInstructionsVisible = true;
