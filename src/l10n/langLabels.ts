import type { Language } from "../types";
import type { InterfaceLang } from "./interfaceLangs";

type LangNameSet = Record<InterfaceLang | "fr", string>;

interface LangNameList {
  [key: Language]: LangNameSet;
}

export const langLabels: LangNameList = {
  am: {
    en: "Amharic",
    fr: "amharique",
    de: "Amharisch",
  },
  ar: {
    en: "Arabic",
    fr: "arabe",
    de: "Arabisch",
  },
  az: {
    en: "Azerbaijani",
    fr: "azéri",
    de: "Aserbeidschanisch",
  },
  be: {
    en: "Belarusian",
    fr: "biélorusse",
    de: "Weißrussisch",
  },
  bg: {
    en: "Bulgarian",
    fr: "bulgare",
    de: "Bulgarisch",
  },
  bn: {
    en: "Bengali",
    fr: "bengali",
    de: "Bengali",
  },
  bs: {
    en: "Bosnian",
    fr: "bosniaque",
    de: "Bosnisch",
  },
  ca: {
    en: "Catalan",
    fr: "catalan",
    de: "Katalanisch",
  },
  ceb: {
    en: "Cebuano",
    fr: "cebuano",
    de: "Cebuano",
  },
  co: {
    en: "Corsican",
    fr: "corse",
    de: "Korsisch",
  },
  cs: {
    en: "Czech",
    fr: "tchèque",
    de: "Tschechisch",
  },
  cy: {
    en: "Welsh",
    fr: "gallois",
    de: "Kymrisch",
  },
  da: {
    en: "Danish",
    fr: "danois",
    de: "Dänisch",
  },
  de: {
    en: "German",
    fr: "allemand",
    de: "Deutsch",
  },
  el: {
    en: "Greek",
    fr: "grec",
    de: "Griechisch",
  },
  en: {
    en: "English",
    fr: "anglais",
    de: "Englisch",
  },
  eo: {
    en: "Esperanto",
    fr: "espéranto",
    de: "Esperanto",
  },
  es: {
    en: "Spanish",
    fr: "espagnol",
    de: "Spanisch",
  },
  et: {
    en: "Estonian",
    fr: "estonien",
    de: "Estnisch",
  },
  eu: {
    en: "Basque",
    fr: "basque",
    de: "Baskisch",
  },
  fa: {
    en: "Persian",
    fr: "persan",
    de: "Persisch",
  },
  fi: {
    en: "Finnish",
    fr: "finnois",
    de: "Finnisch",
  },
  fr: {
    en: "French",
    fr: "français",
    de: "Französisch",
  },
  fy: {
    en: "West Frisian",
    fr: "frison occidental",
    de: "Friesisch",
  },
  ga: {
    en: "Irish",
    fr: "irlandais",
    de: "Irisch",
  },
  gd: {
    en: "Scottish Gaelic",
    fr: "gaélique écossais",
    de: "Gälisch-Schottisch",
  },
  gl: {
    en: "Galician",
    fr: "galicien",
    de: "Galicisch",
  },
  gu: {
    en: "Gujarati",
    fr: "goudjrati",
    de: "Gujarati-Sprache",
  },
  ha: {
    en: "Hausa",
    fr: "haoussa",
    de: "Haussa-Sprache",
  },
  haw: {
    en: "Hawaiian",
    fr: "hawaïen",
    de: "hawaiische Sprache",
  },
  he: {
    en: "Hebrew",
    fr: "hébreu",
    de: "Hebräisch",
  },
  hi: {
    en: "Hindi",
    fr: "hindi",
    de: "Hindi",
  },
  hmn: {
    en: "Hmong",
    fr: "miao chuanqiandian",
    de: "Hmong",
  },
  hr: {
    en: "Croatian",
    fr: "croate",
    de: "Kroatisch",
  },
  ht: {
    en: "Haitian Creole",
    fr: "créole haïtien",
    de: "Haiti-Kreolisch",
  },
  hu: {
    en: "Hungarian",
    fr: "hongrois",
    de: "Ungarisch",
  },
  hy: {
    en: "Armenian",
    fr: "arménien",
    de: "Armenisch",
  },
  id: {
    en: "Indonesian",
    fr: "indonésien",
    de: "Bahasa Indonesia",
  },
  ig: {
    en: "Igbo",
    fr: "igbo",
    de: "Ibo-Sprache",
  },
  is: {
    en: "Icelandic",
    fr: "islandais",
    de: "Isländisch",
  },
  it: {
    en: "Italian",
    fr: "italien",
    de: "Italienisch",
  },
  ja: {
    en: "Japanese",
    fr: "japonais",
    de: "Japanisch",
  },
  jv: {
    en: "Javanese",
    fr: "javanais",
    de: "javanische Sprache",
  },
  ka: {
    en: "Georgian",
    fr: "géorgien",
    de: "Georgisch",
  },
  kk: {
    en: "Kazakh",
    fr: "kazakh",
    de: "Kasachisch",
  },
  km: {
    en: "Central Khmer",
    fr: "khmer central",
    de: "Kambodschanisch",
  },
  kn: {
    en: "Kannada",
    fr: "kannada",
    de: "Kannada",
  },
  ko: {
    en: "Korean",
    fr: "coréen",
    de: "Koreanisch",
  },
  ku: {
    en: "Kurdish",
    fr: "kurde",
    de: "Kurdisch",
  },
  ky: {
    en: "Kyrgyz",
    fr: "kirghiz",
    de: "Kirgisisch",
  },
  la: {
    en: "Latin",
    fr: "latin",
    de: "Latein",
  },
  lb: {
    en: "Luxembourgish",
    fr: "luxembourgeois",
    de: "Luxemburgisch",
  },
  lo: {
    en: "Lao",
    fr: "lao",
    de: "Laotisch",
  },
  lt: {
    en: "Lithuanian",
    fr: "lituanien",
    de: "Litauisch",
  },
  lv: {
    en: "Latvian",
    fr: "letton",
    de: "Lettisch",
  },
  mg: {
    en: "Malagasy",
    fr: "malgache",
    de: "Malagassi-Sprache",
  },
  mi: {
    en: "Maori",
    fr: "maori",
    de: "Maori-Sprache",
  },
  mk: {
    en: "Macedonian",
    fr: "macédonien",
    de: "Makedonisch",
  },
  ml: {
    en: "Malayalam",
    fr: "malayalam",
    de: "Malayalam",
  },
  mn: {
    en: "Mongolian",
    fr: "mongol",
    de: "Mongolisch",
  },
  mr: {
    en: "Marathi",
    fr: "marathe",
    de: "Marathi",
  },
  ms: {
    en: "Malay",
    fr: "malais",
    de: "Malaiisch",
  },
  mt: {
    en: "Maltese",
    fr: "maltais",
    de: "Maltesisch",
  },
  my: {
    en: "Burmese",
    fr: "birman",
    de: "Birmanisch",
  },
  ne: {
    en: "Nepali",
    fr: "népalais",
    de: "Nepali",
  },
  nl: {
    en: "Dutch",
    fr: "néerlandais",
    de: "Niederländisch",
  },
  no: {
    en: "Norwegian",
    fr: "norvégien",
    de: "Norwegisch",
  },
  ny: {
    en: "Chichewa",
    fr: "chichewa",
    de: "Nyanja-Sprache",
  },
  or: {
    en: "Oriya",
    fr: "oriya",
    de: "Oriya-Sprache",
  },
  pa: {
    en: "Punjabi",
    fr: "pendjabi",
    de: "Pandschabi-Sprache",
  },
  pl: {
    en: "Polish",
    fr: "polonais",
    de: "Polnisch",
  },
  ps: {
    en: "Pashto",
    fr: "pachto",
    de: "Paschtu",
  },
  pt: {
    en: "Portuguese",
    fr: "portugais",
    de: "Portugiesisch",
  },
  ro: {
    en: "Romanian",
    fr: "roumain",
    de: "Rumänisch",
  },
  ru: {
    en: "Russian",
    fr: "russe",
    de: "Russisch",
  },
  rw: {
    en: "Kinyarwanda",
    fr: "rwanda",
    de: "Rwanda-Sprache",
  },
  sd: {
    en: "Sindhi",
    fr: "sindhi",
    de: "Sindhi-Sprache",
  },
  si: {
    en: "Sinhala",
    fr: "singhalais",
    de: "Singhalesisch",
  },
  sk: {
    en: "Slovak",
    fr: "slovaque",
    de: "Slowakisch",
  },
  sl: {
    en: "Slovenian",
    fr: "slovène",
    de: "Slowenisch",
  },
  sm: {
    en: "Samoan",
    fr: "samoan",
    de: "Samoanisch",
  },
  sn: {
    en: "Shona",
    fr: "shona",
    de: "Schona-Sprache",
  },
  so: {
    en: "Somali",
    fr: "somali",
    de: "Somali",
  },
  sq: {
    en: "Albanian",
    fr: "albanais",
    de: "Albanisch",
  },
  sr: {
    en: "Serbian",
    fr: "serbe",
    de: "Serbisch",
  },
  st: {
    en: "Southern Sotho",
    fr: "sotho du Sud",
    de: "Süd-Sotho-Sprache",
  },
  su: {
    en: "Sundanese",
    fr: "soundanais",
    de: "Sundanesisch",
  },
  sv: {
    en: "Swedish",
    fr: "suédois",
    de: "Schwedisch",
  },
  sw: {
    en: "Swahili",
    fr: "swahili",
    de: "Swahili",
  },
  ta: {
    en: "Tamil",
    fr: "tamoul",
    de: "Tamil",
  },
  te: {
    en: "Telugu",
    fr: "télougou",
    de: "Telugu-Sprache",
  },
  tg: {
    en: "Tajik",
    fr: "tadjik",
    de: "Tadschikisch",
  },
  th: {
    en: "Thai",
    fr: "thaï",
    de: "Thailändisch",
  },
  tk: {
    en: "Turkmen",
    fr: "turkmène",
    de: "Turkmenisch",
  },
  tl: {
    en: "Tagalog",
    fr: "tagalog",
    de: "Tagalog",
  },
  tr: {
    en: "Turkish",
    fr: "turc",
    de: "Türkisch",
  },
  tt: {
    en: "Tatar",
    fr: "tatar",
    de: "Tatarisch",
  },
  ug: {
    en: "Uyghur",
    fr: "ouïgour",
    de: "Uigurisch",
  },
  uk: {
    en: "Ukrainian",
    fr: "ukrainien",
    de: "Ukrainisch",
  },
  ur: {
    en: "Urdu",
    fr: "ourdou",
    de: "Urdu",
  },
  uz: {
    en: "Uzbek",
    fr: "ouszbek",
    de: "Usbekisch",
  },
  vi: {
    en: "Vietnamese",
    fr: "vietnamien",
    de: "Vietnamesisch",
  },
  xh: {
    en: "Xhosa",
    fr: "xhosa",
    de: "Xhosa-Sprache",
  },
  yi: {
    en: "Yiddish",
    fr: "yiddish",
    de: "Jiddisch",
  },
  yo: {
    en: "Yoruba",
    fr: "yoruba",
    de: "Yoruba-Sprache",
  },
  zh: {
    en: "Chinese",
    fr: "chinois",
    de: "Chinesisch",
  },
  "zh-CN": {
    en: "Chinese (PRC)",
    fr: "chinois (Chine)",
    de: "Chinesisch (China)",
  },
  "zh-TW": {
    en: "Chinese (Taiwan)",
    fr: "choinois (Taïwan)",
    de: "Chinesisch (Taiwan)",
  },
  zu: {
    en: "Zulu",
    fr: "zoulou",
    de: "Zulu-Sprache",
  },
};
