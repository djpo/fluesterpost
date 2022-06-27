export type Language = string | null;

export type TranslationText = string;

export type ErrorMessage = string;

export interface Step {
  lang: Language;
  text: TranslationText;
  isFetching: boolean;
}

export interface Event {
  target: {
    value: string;
  };
}
