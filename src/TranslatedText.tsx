import type { TranslationText } from "./types";

interface Props {
  isTranslating: boolean;
  text: TranslationText;
}

function TranslatedText({ isTranslating, text }: Props): JSX.Element {
  return isTranslating ? <p>(translating...)</p> : <p>{text || ""}</p>;
}

export { TranslatedText };
