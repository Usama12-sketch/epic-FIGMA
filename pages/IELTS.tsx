import type { NextPage } from "next";
import CurriculumFrame from "../components/CurriculumFrame";
import styles from "./IELTS.module.css";

const IELTS: NextPage = () => {
  return (
    <div className={styles.ielts}>
      <header className={styles.headerFrame}>
        <div className={styles.aboutUs}>
          <div className={styles.aboutUs1}>About us</div>
        </div>
        <div className={styles.threeColumnFrame} />
        <div className={styles.home}>HOME</div>
        <div className={styles.aboutUs2}>ABOUT US</div>
        <div className={styles.ourServices}>OUR SERVICES</div>
        <div className={styles.ourCources}>OUR COURCES</div>
      </header>
      <section className={styles.testPrepFrame}>
        <h1 className={styles.ielsts}>IELSTS</h1>
        <div className={styles.wrapperRectangle46}>
          <img
            className={styles.wrapperRectangle46Child}
            loading="eager"
            alt=""
            src="/rectangle-464@2x.png"
          />
        </div>
      </section>
      <section className={styles.twoColumnFrame}>
        <div className={styles.elevateYourEnglish}>
          🌟 Elevate Your English Proficiency with Our IELTS Classes! 🌟
        </div>
        <div className={styles.unlockTheDoors}>
          Unlock the doors to your global dreams with our dynamic and
          results-driven IELTS classes! 🚀
        </div>
      </section>
      <CurriculumFrame />
      <footer className={styles.socialMediaFramesContainer}>
        <div className={styles.socialMediaFramesContainerChild} />
        <div className={styles.facebookInstagramTikTokWha}>
          <div className={styles.facebookInstagramTikTokFra}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.facebookInstagramTikTokFra1}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.facebookInstagramTikTokFra2}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.facebookInstagramTikTokFra3}>
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

export default IELTS;
