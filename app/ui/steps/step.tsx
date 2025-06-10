import { RiCloseLargeLine, RiRefreshLine } from "react-icons/ri";
import { getLangLabel } from "@/l10n/getLangLabel";
import type { Language, TranslationText, Event } from "@/types";

interface Props {
  hasRemoveButton: boolean;
  isTranslating: boolean;
  lang: Language;
  text: TranslationText;
  langs: Language[];
  chooseLang: (newLang: Language) => void;
  randomizeLang: () => void;
  removeStep: () => void;
}

const Step = ({
  hasRemoveButton,
  isTranslating,
  lang,
  text,
  langs,
  chooseLang,
  randomizeLang,
  removeStep,
}: Props): React.JSX.Element => (
  <div
    className={`
      mt-1 bg-gray-300 rounded p-2
      ${isTranslating && "bg-yellow-500"}
    `}
  >
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

      <div className="flex">
        <button
          className="size-7 rounded bg-orange-500 flex justify-center items-center cursor-pointer hover:bg-orange-600"
          onClick={randomizeLang}
        >
          <RiRefreshLine />
        </button>

        {hasRemoveButton && (
          <button
            className="ml-2 size-7 rounded bg-orange-500 flex justify-center items-center cursor-pointer hover:bg-orange-600"
            onClick={removeStep}
          >
            <RiCloseLargeLine />
          </button>
        )}
      </div>
    </div>

    <div className="mt-2 min-h-13 border rounded bg-gray-200 px-1">
      <p>{text || ""}</p>
    </div>
  </div>
);

export { Step };
