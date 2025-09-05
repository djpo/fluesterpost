import { getLangLabel } from "@/l10n/getLangLabel";
import type { Language, TranslationText, Event } from "@/types";

interface Props {
  lang: Language;
  text: TranslationText;
  langs: Language[];
  chooseLang: (newLang: Language) => void;
  updateText: (newText: TranslationText) => void;
}

const StepOrigin = ({
  lang,
  text,
  langs,
  chooseLang,
  updateText,
}: Props): React.JSX.Element => (
  <div className="mt-1 bg-(--white-translucent) rounded p-2">
    <div className="flex direction-row justify-between">
      <select
        className="h-7 w-55 bg-gray-400 rounded border pl-1 cursor-pointer"
        value={lang}
        onChange={(e: Event) => chooseLang(e.target.value)}
      >
        {langs.map((langCode) => (
          <option key={langCode} value={langCode}>
            ({langCode.toUpperCase()}) {getLangLabel(langCode)}
          </option>
        ))}
      </select>
    </div>

    <textarea
      wrap="soft"
      value={text}
      onChange={(e) => updateText(e.target.value)}
      placeholder="enter text"
      className="mt-2 min-h-13 w-full border border-orange-500 rounded bg-white px-1"
    />
  </div>
);

export { StepOrigin };
