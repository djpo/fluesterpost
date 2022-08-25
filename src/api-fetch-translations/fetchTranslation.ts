import axios from "axios";
import type { Language, TranslationText } from "../types";

interface RequestParams {
  method: string;
  url: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummyResponse = {
  data: {
    data: {
      translations: [{ translatedText: "dummy translation" }],
    },
  },
};

axios.defaults.baseURL = process.env.REACT_APP_GOOGLE_TRANSLATE_URL;
const apiKey = process.env.REACT_APP_GOOGLE_CLOUD_API_KEY || "";

// // dummy API response (so I don't use up my API quota)
// // @ts-ignore
// const fetchTranslation = async () => {
//   const timeout = (ms: number) =>
//     new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   await timeout(1000);
//   return dummyResponse;
// };

// Google Translate API call
const fetchTranslation = async (
  sourceLang: Language,
  targetLang: Language,
  textToTranslate: TranslationText
) => {
  const urlEncoded = `language/translate/v2/?key=${encodeURIComponent(
    apiKey
  )}&q=${encodeURIComponent(textToTranslate)}&target=${encodeURIComponent(
    targetLang
  )}&source=${encodeURIComponent(sourceLang)}`;

  const params: RequestParams = {
    method: "POST",
    url: urlEncoded,
  };

  return axios.request(params);
};

export { fetchTranslation };
