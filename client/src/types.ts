export type Language = string;

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

export interface SavedCycleStep {
  lang: Language;
  text: TranslationText;
}

export interface SavedCycle {
  _id: string;
  originLang: Language;
  originText: TranslationText;
  steps: SavedCycleStep[];
}
