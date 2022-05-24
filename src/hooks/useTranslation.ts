import { useState } from "react";
import axios from "axios";
import type { Language, TranslationText, Error } from "../types";

interface RequestParams {
  method: string;
  url: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummyResponse = {
  data: {
    data: {
      translations: [{ translatedText: "gute Laune, Leute!" }],
    },
  },
};

axios.defaults.baseURL = process.env.REACT_APP_GOOGLE_TRANSLATE_URL;
const apiKey = process.env.REACT_APP_GOOGLE_CLOUD_API_KEY;

// // dummy API response (so I don't use up my API quota)
// // @ts-ignore
// const apiFunction = async (params: RequestParams) => {
//   const timeout = (ms: number) =>
//     new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   await timeout(1000);
//   return dummyResponse;
// };

// Google Translate API call
const apiFunction = async (params: RequestParams) => {
  return axios.request(params);
};

const useTranslation = () => {
  const [translation1, setTranslation1] = useState<TranslationText>(null);
  const [translation2, setTranslation2] = useState<TranslationText>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);

  const fetchTranslation = async (
    originLanguage: Language,
    targetLanguage: Language,
    originText: TranslationText
  ) => {
    const params1: RequestParams = {
      method: "POST",
      url: `language/translate/v2/?key=${apiKey}&q=${originText}&target=${targetLanguage}&source=${originLanguage}`,
    };

    try {
      setIsFetching(true);
      setTranslation1(null);
      setTranslation2(null);
      setError(null);

      // translate from origin to step 1
      const response1 = await apiFunction(params1);
      const step1Translation = response1.data.data.translations[0].translatedText;
      setTranslation1(step1Translation);

      // translate from step 1 back to origin
      const params2: RequestParams = {
        method: "POST",
        url: `language/translate/v2/?key=${apiKey}&q=${step1Translation}&target=${originLanguage}&source=${targetLanguage}`,
      };
      const response2 = await apiFunction(params2);
      const step2Translation = response2.data.data.translations[0].translatedText;
      setTranslation2(step2Translation);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  };

  return {
    isFetching,
    error,
    translation1,
    translation2,
    fetchTranslation,
  };
};

export { useTranslation };
