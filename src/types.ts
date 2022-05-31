export type Language = string | null;

export type TranslationText = string;

export interface ErrorNotNull {
  message: string;
}

export type Error = ErrorNotNull | null;
