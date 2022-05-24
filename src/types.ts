export type Language = string | null;

export type TranslationText = string | null;

export interface ErrorNotNull {
  message: string;
}

export type Error = ErrorNotNull | null;
