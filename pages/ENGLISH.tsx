import type { NextPage } from "next";
import MainMenu from "../components/MainMenu";
import EnglishLanguageFrame from "../components/EnglishLanguageFrame";
import FlexibleLearningFrame from "../components/FlexibleLearningFrame";
import styles from "./ENGLISH.module.css";

const ENGLISH: NextPage = () => {
  return (
    <div className={styles.english}>
      <MainMenu />
      <EnglishLanguageFrame />
      <FlexibleLearningFrame />
      <footer className={styles.interactiveLessonsFrame}>
        <div className={styles.interactiveLessonsFrameChild} />
        <div className={styles.facebookInstagramFrame}>
          <div className={styles.flexibilityRedefinedFrame}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.flexibilityRedefinedFrame1}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.flexibilityRedefinedFrame2}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.flexibilityRedefinedFrame3}>
            <img
              className={styles.whatsappIcon}
              loading="eager"
              alt=""
              src="/whatsapp@2x.png"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ENGLISH;
