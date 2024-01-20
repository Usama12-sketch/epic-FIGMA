import type { NextPage } from "next";
import AccountManagementFrame from "../components/AccountManagementFrame";
import styles from "./HR.module.css";

const HR: NextPage = () => {
  return (
    <div className={styles.hr}>
      <div className={styles.hrChild} />
      <section className={styles.hRFrame}>
        <AccountManagementFrame emptyFramePadding="var(--padding-16xl) var(--padding-xl)" />
        <h1 className={styles.hrHumanResources}>HR (HUMAN RESOURCES)</h1>
        <div className={styles.wrapperRectangleShape}>
          <img
            className={styles.rectangleShapeIcon}
            loading="eager"
            alt=""
            src="/rectangle-466@2x.png"
          />
        </div>
      </section>
      <section className={styles.hRFrame1}>
        <h1 className={styles.hrTypicallyRefers}>
          "HR" typically refers to Human Resources, which is a critical function
          within organizations responsible for managing various aspects related
          to the workforce. The primary goal of HR is to optimize the
          performance of employees, ensure compliance with employment laws, and
          contribute to the overall success of the organization. HR
          professionals handle a wide range of tasks, including recruitment,
          training, employee relations, benefits administration, and more.
        </h1>
      </section>
      <footer className={styles.socialMediaFrames}>
        <div className={styles.facebookInstagram}>
          <div className={styles.facebookInstagramChild} />
          <div className={styles.platformFrames}>
            <div className={styles.facebookInstagramWhatsApp}>
              <img
                className={styles.facebookIcon}
                loading="eager"
                alt=""
                src="/facebook@2x.png"
              />
            </div>
            <div className={styles.facebookInstagramWhatsApp1}>
              <img
                className={styles.instagramIcon}
                loading="eager"
                alt=""
                src="/instagram@2x.png"
              />
            </div>
            <div className={styles.facebookInstagramWhatsApp2}>
              <img
                className={styles.tiktokIcon}
                loading="eager"
                alt=""
                src="/tiktok@2x.png"
              />
            </div>
            <div className={styles.facebookInstagramWhatsApp3}>
              <img
                className={styles.whatsappIcon}
                loading="eager"
                alt=""
                src="/whatsapp@2x.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HR;
