export type Language = string | null;

export type TranslationText = string;

export interface ErrorNotNull {
  message: string;
}

export type Error = ErrorNotNull | null;

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
