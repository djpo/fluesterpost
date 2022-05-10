import { useState, useEffect } from 'react';
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
const source = 'en';
const target = 'de';
const query = 'hello, please translate me';
const params = {
  method: 'POST',
  url: `language/translate/v2/?key=${apiKey}&q=${query}&target=${target}&source=${source}`,
};

const apiFunction = async () => {
  // Google Translate API call
  return axios.request(params);

  // // dummy API response (so I don't use up my API quota)
  // const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  // await timeout(1000);
  // return dummyResponse;
}

const useTranslation = () => {
  const [response, setResponse] = useState({
    justTheTranslation: 'initial translation',
    isFetching: false,
    error: null,
  });

  const handleFetch = async () => {
    try {
      setResponse({
        data: null,
        isFetching: true,
        error: null,
      });

      const result = await apiFunction();

      setResponse({
        data: result,
        justTheTranslation: result.data.data.translations[0].translatedText,
      });
    } catch(error) {
      setResponse({
        error: error.message,
      });
    } finally {
      setResponse({
        isFetching: false,
      });
    }
  };

  return [
    response,
    handleFetch,
  ];
};

export { useTranslation };
