"use server";

import { Instructions } from "@/ui/instructions/instructions";
import { Steps } from "@/ui/steps/steps";
import { defaultErrorMessage } from "@/default-values";
import { fetchLanguages } from "@/lib/fetchLanguages";
import styles from "@/ui/home.module.css";
import { ErrorMessage } from "@/types";

export default async function Home(): Promise<React.JSX.Element> {
  const errorMessage: ErrorMessage = defaultErrorMessage;

  const supportedLangs = await fetchLanguages();
  console.log("Page > supportedLangs:");
  console.log(supportedLangs);

  return (
    <div className={styles.appBody}>
      <Instructions />

      {errorMessage && <p>error: {errorMessage}</p>}

      <Steps />
    </div>
  );
}
