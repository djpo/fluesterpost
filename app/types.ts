export type Language = string;

export type TranslationText = string;

export type ErrorMessage = string;

export interface Event {
  target: {
    value: string;
  };
}

export interface CycleStep {
  lang: Language;
  text: TranslationText;
}

export interface CycleStepWithFetching extends CycleStep {
  isFetching: boolean;
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
