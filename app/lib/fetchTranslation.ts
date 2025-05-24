"use server";

import dummyTranslation from "@/lib/fetchTranslationResponse.json";
import { Language, TranslationText } from "@/types";

type ResponseTranslation = {
  data: {
    translations: Array<{
      translatedText: string;
      detectedSourceLanguage: string;
    }>;
  };
};

const baseUrl = process.env.GOOGLE_TRANSLATE_URL;
const apiKey = process.env.GOOGLE_CLOUD_API_KEY || "";

export const fetchTranslation = async (
  sourceLang: Language,
  targetLang: Language,
  textToTranslate: TranslationText
): Promise<TranslationText> => {
  try {
    const urlEncoded = `${baseUrl}?key=${encodeURIComponent(
      apiKey
    )}&q=${encodeURIComponent(textToTranslate)}&target=${encodeURIComponent(
      targetLang
    )}&source=${encodeURIComponent(sourceLang)}`;

    const response = await fetch(urlEncoded, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: ResponseTranslation = await response.json();

    // // dummy API response (with artificially delayed response)
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // const data = dummyTranslation;

    const translation = data.data.translations[0].translatedText;

    return translation;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch translation");
  }
};
