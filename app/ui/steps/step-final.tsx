import { getLangLabel } from "@/l10n/getLangLabel";
import type { Language, TranslationText } from "@/types";

interface Props {
  isTranslating: boolean;
  originLang: Language;
  text: TranslationText;
}

const StepFinal = ({
  isTranslating,
  originLang,
  text,
}: Props): React.JSX.Element => (
  <div
    className={`
      mt-1 bg-(--white-translucent) rounded p-2
      ${isTranslating && "bg-yellow-500"}
    `}
  >
    <div className="h-7 w-55 bg-gray-400 rounded border pl-1 cursor-pointer">
      ({originLang.toUpperCase()}) {getLangLabel(originLang)}
    </div>

    <div className="mt-2 min-h-13 border rounded bg-gray-200 px-1">
      <p>{text}</p>
    </div>
  </div>
);

export { StepFinal };
