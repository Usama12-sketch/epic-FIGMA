import type { NextPage } from "next";
import HomeFrame from "../components/HomeFrame";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./WEBDEVELOPMENT.module.css";

const WEBDEVELOPMENT: NextPage = () => {
  return (
    <div className={styles.webDevelopment}>
      <div className={styles.webDevelopmentChild} />
      <HomeFrame />
      <section className={styles.webDevelopmentParent}>
        <h1 className={styles.webDevelopment1}>WEB DEVELOPMENT</h1>
        <div className={styles.wrapperRectangle46}>
          <img
            className={styles.wrapperRectangle46Child}
            loading="eager"
            alt=""
            src="/rectangle-462@2x.png"
          />
        </div>
      </section>
      <section className={styles.webDevelopmentRefersToTheWrapper}>
        <h2 className={styles.webDevelopmentRefers}>
          Web development refers to the process of building and maintaining
          websites or web applications. It involves a combination of skills in
          programming, design, and problem-solving to create and maintain
          functional and visually appealing websites. Web development can range
          from simple static web pages to complex dynamic web applications.
        </h2>
      </section>
      <section className={styles.thereAreSeveralWaysToEarnWrapper}>
        <h2 className={styles.thereAreSeveral}>
          There are several ways to earn money in web development. Here are some
          common avenues:
        </h2>
      </section>
      <FrameComponent3 />
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.facebookWrapper}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.instagramWrapper}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.tiktokWrapper}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.whatsappWrapper}>
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

export default WEBDEVELOPMENT;
