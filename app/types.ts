export type Language = string;

export type TranslationText = string;

export type ErrorMessage = string;

export interface Step {
  lang: Language;
  text: TranslationText;
  isFetching: boolean;
}

export interface SavedStep {
  lang: Language;
  text: TranslationText;
}

export interface Event {
  target: {
    value: string;
  };
}
