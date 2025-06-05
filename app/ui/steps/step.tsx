import { CiNoWaitingSign, CiShuffle } from "react-icons/ci";
import { getLangLabel } from "@/l10n/getLangLabel";
import styles from "@/ui/steps/step.module.css";
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
    className={
      isTranslating
        ? `${styles.stepRow} ${styles.stepRowTranslating}`
        : styles.stepRow
    }
  >
    <div className={styles.stepLeftLineContainer}>
      <div className={styles.stepLeftLine} />
    </div>

    <div className={styles.stepLangBox}>
      <div className={styles.stepLangBoxTop}>
        <button className={styles.stepLangLittleButton} onClick={randomizeLang}>
          <CiShuffle />
        </button>
        {hasRemoveButton && (
          <button className={styles.stepLangLittleButton} onClick={removeStep}>
            <CiNoWaitingSign />
          </button>
        )}
      </div>

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
      <p>{text || ""}</p>
    </div>
  </div>
);

export { Step };
