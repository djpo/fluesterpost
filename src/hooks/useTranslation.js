import { useState } from 'react';
import axios from 'axios';

const dummyResponse = {
  data: {
    data: {
      translations: [
        { translatedText: 'gute Laune, Leute!'},
      ],
    },
  },
};

axios.defaults.baseURL = process.env.REACT_APP_GOOGLE_TRANSLATE_URL;
const apiKey = process.env.REACT_APP_GOOGLE_CLOUD_API_KEY;

const apiFunction = async (params) => {
  // // dummy API response (so I don't use up my API quota)
  // const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  // await timeout(1000);
  // return dummyResponse;

  // Google Translate API call
  return axios.request(params);
}

const useTranslation = () => {
  const [translation, setTranslation] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const fetchTranslation = async (originLanguage, targetLanguage, originText) => {
    const params = {
      method: 'POST',
      url: `language/translate/v2/?key=${apiKey}&q=${originText}&target=${targetLanguage}&source=${originLanguage}`,
    };

    try {
      setIsFetching(true);
      setTranslation(null);
      setError(null);

      const response = await apiFunction(params);

      setTranslation(response.data.data.translations[0].translatedText);
    } catch(error) {
      setError(error);
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
