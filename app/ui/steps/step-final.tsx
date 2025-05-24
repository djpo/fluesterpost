import styles from "@/ui/steps/step.module.css";
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
    className={
      isTranslating
        ? `${styles.stepRow} ${styles.stepRowTranslating}`
        : styles.stepRow
    }
  >
    <div className={styles.stepLeftLineContainer}>
      <div className={`${styles.stepLeftLine} ${styles.stepLeftLineFinal}`} />
    </div>

    <div className={`${styles.stepLangBox} ${styles.stepLangBoxOrigin}`}>
      <div className={styles.stepLangBoxBottom}>
        <p className={styles.languagePickerSpacer}>{originLang}</p>
      </div>
    </div>

    <div className={styles.stepText}>
      <p>{text}</p>
    </div>
  </div>
);

export { StepFinal };
