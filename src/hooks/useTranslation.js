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

const useTranslation = (query, target, source) => {
  const [translationResponse, setTranslationResponse] = useState(null);
  const [translationError, setTranslationError] = useState(null);

  const params = {
    method: 'POST',
    url: `language/translate/v2/?key=${apiKey}&q=${query}&target=${target}&source=${source}`,
  };

  const fetchData = async (params) => {
    try {
      // // Google Translate API call
      // const result = await axios.request(params);

      // dummy API response (so I don't use up my API quota)
      const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      await timeout(1000);
      const result = dummyResponse;

      console.log('result.data.data.translations[0].translatedText:');
      console.log(result.data.data.translations[0].translatedText);

      setTranslationResponse(result.data.data.translations[0].translatedText);
    } catch( error ) {
      setTranslationError(error);
    }
  };

  useEffect(() => {
    console.log('--- useTranslation > useEffect');
    fetchData(params);
  }, []);

  return {
    translationResponse,
    translationError,
  };
};

export { useTranslation };
