import type { NextPage } from "next";
import AccountManagementFrame from "../components/AccountManagementFrame";
import AdvertisingMarketingFrame from "../components/AdvertisingMarketingFrame";
import styles from "./ACCOUNTMANAGMENT.module.css";

const ACCOUNTMANAGMENT: NextPage = () => {
  return (
    <div className={styles.accountManagment}>
      <div className={styles.accountManagmentChild} />
      <AccountManagementFrame emptyFramePadding="var(--padding-15xl) var(--padding-xl) var(--padding-17xl)" />
      <section className={styles.accountsFrame}>
        <h1 className={styles.accountManagement}>ACCOUNT MANAGEMENT</h1>
        <div className={styles.wrapperRectangle46}>
          <img
            className={styles.wrapperRectangle46Child}
            loading="eager"
            alt=""
            src="/rectangle-469@2x.png"
          />
        </div>
      </section>
      <section className={styles.accountManagementTypicallyRWrapper}>
        <div className={styles.accountManagementTypically}>
          Account management typically refers to the practice of overseeing and
          managing client accounts within a business, especially in fields like
          finance, advertising, sales, or digital marketing. In the context of
          earning money, account management can be related to various
          industries, and the methods may differ based on the specific field.
        </div>
      </section>
      <section className={styles.servicesFrame}>
        <div className={styles.belowAreGeneral}>
          Below are general concepts associated with account management and how
          it can be monetized in different contexts:
        </div>
      </section>
      <AdvertisingMarketingFrame />
      <footer className={styles.facebookInstagramFrame}>
        <div className={styles.facebookInstagramFrameChild} />
        <div className={styles.tikTokWhatsAppFrame}>
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

export default ACCOUNTMANAGMENT;
