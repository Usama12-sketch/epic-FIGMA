import type { NextPage } from "next";
import HomeFrame from "../components/HomeFrame";
import AppDevelopment from "../components/AppDevelopment";
import styles from "./SHOPIFY.module.css";

const SHOPIFY: NextPage = () => {
  return (
    <div className={styles.shopify}>
      <div className={styles.shopifyChild} />
      <section className={styles.shopifyOverview}>
        <HomeFrame />
        <div className={styles.frameWithText}>
          <h1 className={styles.shopify1}>Shopify</h1>
        </div>
        <div className={styles.wrapperRectangleShape}>
          <img
            className={styles.rectangleShapeIcon}
            loading="eager"
            alt=""
            src="/rectangle-4611@2x.png"
          />
        </div>
      </section>
      <section className={styles.introFrame}>
        <h2 className={styles.shopifyIsAn}>
          Shopify is an e-commerce platform that allows individuals and
          businesses to create online stores and sell products or services. It
          provides a user-friendly interface and a range of tools to help users
          set up and manage their online businesses without requiring extensive
          technical knowledge.
        </h2>
      </section>
      <div className={styles.monetizationMethods}>
        <h2 className={styles.thereAreSeveral}>
          There are several ways to earn money using Shopify:
        </h2>
      </div>
      <AppDevelopment />
      <footer className={styles.combinedSocialMedia}>
        <div className={styles.combinedSocialMediaChild} />
        <div className={styles.framedSocialMedia}>
          <div className={styles.socialPlatformsGroup}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.socialPlatformsGroup1}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.socialPlatformsGroup2}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.socialPlatformsGroup3}>
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

export default SHOPIFY;
