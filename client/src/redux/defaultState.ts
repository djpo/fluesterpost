import type {
  Language,
  TranslationText,
  Step,
  ErrorMessage,
  SavedCycle,
  ResultCycle,
} from "../types";

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

export const defaultAreInstructionsVisible = true;

export const defaultSavedCycles: SavedCycle[] = [];

export const defaultResultCycle: ResultCycle = {
  originLang: "en",
  originText: "how much wood would a woodchuck chuck if a woodchuck could chuck wood?",
  steps: [
    {
      lang: "sm",
      text: "o le a le tele o fafie o le a tu'u e le fafie pe a mafai e se fafie ona sasaina fafie",
    },
    {
      lang: "sd",
      text: "ڪاٺ ساڙڻ وارو ڪيترو ڪاٺ ڪڍي ڇڏيندو جيڪڏهن ڪاٺ ساڙيندڙ ڪاٺ کي ساڙي سگهي ٿو",
    },
    {
      lang: "su",
      text: "Sabaraha kai anu bakal diduruk ku pembakar kai upami pembakar kai tiasa ngaduruk kai",
    },
    {
      lang: "kk",
      text: "Ағаш оттығы қанша ағашты жағады, егер ағаш оттығы ағашты жағуға болады",
    },
    {
      lang: "ko",
      text: "나무 버너가 나무를 태울 수 있다면 나무 버너는 얼마나 많은 나무를 태울 수 있습니까?",
    },
    {
      lang: "ig",
      text: "Ọ bụrụ na nkụ nkụ nwere ike ire nkụ, osisi ole ka osisi nwere ike ire ọkụ?",
    },
    {
      lang: "ky",
      text: "Отун күйө турган болсо, канча дарак күйүшү мүмкүн?",
    },
    {
      lang: "en",
      text: "How many trees can be burned if wood is burned?",
    },
  ],
};
