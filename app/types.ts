export type Language = string;

export type TranslationText = string;

export type ErrorMessage = string;

export interface Event {
  target: {
    value: string;
  };
}

export interface CycleStep {
  id: string;
  lang: Language;
  text: TranslationText;
}

export interface CycleReceived {
  id: number;
  created_at: string;
  cycle_json: string; // JSON string of the saved steps
}

export interface Cycle {
  id: number;
  createdAt: string;
  steps: CycleStep[];
}
