import type { NextPage } from "next";
import DesignSection from "../components/DesignSection";
import styles from "./APPDEVELOPMENT.module.css";

const APPDEVELOPMENT: NextPage = () => {
  return (
    <div className={styles.appDevelopment}>
      <div className={styles.appDevelopmentChild} />
      <header className={styles.appDevProcess}>
        <div className={styles.aboutUs}>
          <div className={styles.aboutUs1}>About us</div>
        </div>
        <div className={styles.rectangleShape} />
        <div className={styles.home}>HOME</div>
        <div className={styles.aboutUs2}>ABOUT US</div>
        <div className={styles.ourServices}>OUR SERVICES</div>
        <div className={styles.ourCources}>OUR COURCES</div>
      </header>
      <section className={styles.appDevText}>
        <h1 className={styles.appDevelopment1}>APP DEVELOPMENT</h1>
        <div className={styles.wrapperRectangle46}>
          <img
            className={styles.wrapperRectangle46Child}
            loading="eager"
            alt=""
            src="/rectangle-4613@2x.png"
          />
        </div>
      </section>
      <section className={styles.appDevelopment2}>
        <div className={styles.appDevelopmentRefers}>
          App development refers to the process of creating software
          applications (apps) that run on mobile devices, such as smartphones
          and tablets, or other platforms like desktop computers. These
          applications can serve a variety of purposes, including entertainment,
          productivity, communication, education, and more. App development
          involves several stages, including ideation, design, coding, testing,
          and deployment.
        </div>
      </section>
      <section className={styles.monetizationFrame}>
        <div className={styles.toSucceedIn}>
          To succeed in app development and monetization, it's crucial to create
          a valuable and user-friendly app, conduct market research, and have a
          well-thought-out marketing strategy. Keep in mind that the app market
          is highly competitive, so delivering a unique and high-quality product
          is essential for attracting and retaining users.
        </div>
      </section>
      <div className={styles.ideaPlanning}>
        <div className={styles.heresABrief}>
          Here's a brief overview of the app development process:
        </div>
      </div>
      <DesignSection />
      <footer className={styles.platformFrames}>
        <div className={styles.platformFramesChild} />
        <div className={styles.socialMediaFrames}>
          <div className={styles.networkPanelA}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.networkPanelA1}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.networkPanelA2}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.networkPanelA3}>
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

export default APPDEVELOPMENT;
