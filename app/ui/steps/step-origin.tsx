import { getLangLabel } from "@/l10n/getLangLabel";
import styles from "@/ui/steps/step.module.css";
import type { Language, TranslationText, Event } from "@/types";

interface Props {
  isTranslating: boolean;
  lang: Language;
  text: TranslationText;
  langs: Language[];
  chooseLang: (newLang: Language) => void;
  updateText: (newText: TranslationText) => void;
}

const StepOrigin = ({
  isTranslating,
  lang,
  text,
  langs,
  chooseLang,
  updateText,
}: Props): React.JSX.Element => (
  <div
    className={
      isTranslating
        ? `${styles.stepRow} ${styles.stepRowTranslating}`
        : styles.stepRow
    }
  >
    <div className={styles.stepLeftLineContainer}>
      <div className={`${styles.stepLeftLine} ${styles.stepLeftLineOrigin}`} />
    </div>

    <div className={`${styles.stepLangBox} ${styles.stepLangBoxOrigin}`}>
      <div className={styles.stepLangBoxBottom}>
        <select
          className={styles.languagePicker}
          value={lang}
          onChange={(e: Event) => chooseLang(e.target.value)}
        >
          {langs.map((langCode) => (
            <option key={langCode} value={langCode}>
              {getLangLabel(langCode)}
            </option>
          ))}
        </select>
      </div>
    </div>

    <div className={styles.stepText}>
      <textarea
        wrap="soft"
        value={text}
        onChange={(e) => updateText(e.target.value)}
        placeholder="enter text"
      />
    </div>
  </div>
);

export { StepOrigin };
