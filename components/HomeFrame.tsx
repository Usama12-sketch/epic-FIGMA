import type { NextPage } from "next";
import styles from "./HomeFrame.module.css";

const HomeFrame: NextPage = () => {
  return (
    <header className={styles.homeFrame}>
      <div className={styles.homeFrameChild} />
      <div className={styles.aboutUsFrame}>
        <div className={styles.home}>HOME</div>
        <div className={styles.home1}>HOME</div>
      </div>
      <div className={styles.aboutUsFrame1}>
        <div className={styles.aboutUs}>ABOUT US</div>
        <div className={styles.aboutUs1}>ABOUT US</div>
      </div>
      <div className={styles.aboutUsFrame2}>
        <div className={styles.ourServices}>OUR SERVICES</div>
        <div className={styles.ourServices1}>OUR SERVICES</div>
      </div>
      <div className={styles.aboutUsFrame3}>
        <div className={styles.ourCources}>OUR COURCES</div>
        <div className={styles.ourCources1}>OUR COURCES</div>
      </div>
    </header>
  );
};

export default HomeFrame;
