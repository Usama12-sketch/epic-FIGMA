import type { NextPage } from "next";
import AccountManagementFrame from "../components/AccountManagementFrame";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./DIGITALMARKETING.module.css";

const DIGITALMARKETING: NextPage = () => {
  return (
    <div className={styles.digitalMarketing}>
      <div className={styles.digitalMarketingChild} />
      <AccountManagementFrame emptyFramePadding="var(--padding-15xl) var(--padding-xl) var(--padding-17xl)" />
      <section className={styles.digitalMarketingParent}>
        <h1 className={styles.digitalMarketing1}>DIGITAL MARKETING</h1>
        <div className={styles.wrapperRectangle46}>
          <img
            className={styles.wrapperRectangle46Child}
            loading="eager"
            alt=""
            src="/rectangle-46@2x.png"
          />
        </div>
      </section>
      <section className={styles.digitalMarketingRefersToThWrapper}>
        <div className={styles.digitalMarketingRefers}>
          Digital marketing refers to the use of digital channels, platforms,
          and technologies to promote and advertise products, services, or
          brands. It encompasses a wide range of online marketing activities
          aimed at reaching and engaging with a target audience. Digital
          marketing strategies often include elements such as search engine
          optimization (SEO), social media marketing, email marketing, content
          marketing, paid advertising (such as pay-per-click), and more.
        </div>
      </section>
      <div className={styles.hereAreSomeWaysYouCanPotWrapper}>
        <div className={styles.hereAreSome}>
          Here are some ways you can potentially earn money through digital
          marketing:
        </div>
      </div>
      <FrameComponent2 />
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

export default DIGITALMARKETING;
