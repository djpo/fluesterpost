import { useState, useEffect } from "react";
import axios from "axios";
import { dummyResponse } from "./dummyResponse";

axios.defaults.baseURL = process.env.REACT_APP_GOOGLE_TRANSLATE_URL;
const apiKey = process.env.REACT_APP_GOOGLE_CLOUD_API_KEY;
const params = {
  method: "GET",
  url: `language/translate/v2/languages?key=${apiKey}`,
};

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // const fetchData = async (params) => {
  const fetchData = async () => {
    try {
      // // Google Translate API call
      // const result = await axios.request(params);

      // dummy API response (so I don't use up my API quota)
      const timeout = (ms) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      await timeout(1000);
      const result = dummyResponse;

      setResponse(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(params);
  }, []);

  return {
    response,
    error,
    loading,
  };
};

export { useAxios };
