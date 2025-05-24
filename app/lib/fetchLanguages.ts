"use server";

import dummyLanguages from "@/lib/fetchLanguagesResponse.json";
import { Language } from "@/types";

type ResponseLang = {
  language: string;
};
type ResponseLanguages = {
  data: {
    languages: Array<ResponseLang>;
  };
};

const baseUrl = process.env.GOOGLE_TRANSLATE_URL;
const apiKey = process.env.GOOGLE_CLOUD_API_KEY || "";

export const fetchLanguages = async (): Promise<Language[]> => {
  try {
    const endpoint = "/languages";
    const urlEncoded = `${baseUrl}${endpoint}?key=${encodeURIComponent(
      apiKey
    )}`;

    const response = await fetch(urlEncoded, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: ResponseLanguages = await response.json();

    // // dummy API response (with artificially delayed response)
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // const supportedLangs: Language[] = dummyLanguages.data.languages.map(
    //   (lang: ResponseLang) => lang.language
    // );

    const supportedLangs: Language[] = data.data.languages.map(
      (lang) => lang.language
    );

    return supportedLangs;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch list of supported language");
  }
};
