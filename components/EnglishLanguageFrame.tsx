import type { NextPage } from "next";
import styles from "./EnglishLanguageFrame.module.css";

const EnglishLanguageFrame: NextPage = () => {
  return (
    <section className={styles.englishLanguageFrame}>
      <h1 className={styles.englishLanguage}>ENGLISH LANGUAGE</h1>
      <div className={styles.flexibleFrame}>
        <div className={styles.wrapperRectangleFrame}>
          <img
            className={styles.rectangleFrameIcon}
            loading="eager"
            alt=""
            src="/rectangle-463@2x.png"
          />
        </div>
      </div>
      <div className={styles.unlockThePowerOfEnglishMaParent}>
        <div className={styles.unlockThePower}>
          🌟 Unlock the Power of English Mastery! 🌟
        </div>
        <div className={styles.transformativeJourneyFrame}>
          <div className={styles.embarkOnA}>
            Embark on a transformative journey with our dynamic and engaging
            English classes, where language mastery meets the art of expression.
            🚀
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnglishLanguageFrame;
