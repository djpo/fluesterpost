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

const apiFunction = async (params: RequestParams) => {
  // // dummy API response (so I don't use up my API quota)
  // const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  // await timeout(1000);
  // return dummyResponse;

  // Google Translate API call
  return axios.request(params);
};

const useTranslation = () => {
  const [translation, setTranslation] = useState<TranslationText>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);

  const fetchTranslation = async (
    originLanguage: Language,
    targetLanguage: Language,
    originText: TranslationText
  ) => {
    const params: RequestParams = {
      method: "POST",
      url: `language/translate/v2/?key=${apiKey}&q=${originText}&target=${targetLanguage}&source=${originLanguage}`,
    };

    try {
      setIsFetching(true);
      setTranslation(null);
      setError(null);

      const response = await apiFunction(params);

      setTranslation(response.data.data.translations[0].translatedText);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  };

  return {
    isFetching,
    error,
    translation,
    fetchTranslation,
  };
};

export { useTranslation };
