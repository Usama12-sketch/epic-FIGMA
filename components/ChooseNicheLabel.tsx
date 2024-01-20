import type { NextPage } from "next";
import styles from "./ChooseNicheLabel.module.css";

const ChooseNicheLabel: NextPage = () => {
  return (
    <section className={styles.chooseNicheLabel}>
      <div className={styles.researchProgramsText}>
        <div className={styles.joinProgramsText}>
          <div className={styles.selectProductsLabel}>
            <div className={styles.chooseANiche}>Choose a Niche:</div>
          </div>
          <div className={styles.qualityContentText}>
            <div className={styles.selectANiche}>
              Select a niche or industry that you are interested in or have
              knowledge about. It's easier to promote products or services when
              you have some level of understanding or passion for the topic.
            </div>
          </div>
          <div className={styles.socialMediaFramesLabel}>
            <div className={styles.researchAffiliatePrograms}>
              Research Affiliate Programs:
            </div>
            <div className={styles.lookForAffiliate}>
              Look for affiliate programs within your chosen niche. Many
              companies and online retailers have affiliate programs, and you
              can find them through affiliate networks, individual company
              websites, or platforms like Amazon Associates, ClickBank,
              ShareASale, and others.
            </div>
          </div>
          <div className={styles.messagingFrameLabel}>
            <div className={styles.joinAffiliatePrograms}>
              Join Affiliate Programs:
            </div>
          </div>
          <div className={styles.onceYouFind}>
            Once you find suitable affiliate programs, sign up and join them.
            Most affiliate programs are free to join, but some may have specific
            requirements or may ask for information about your online presence
            and promotional methods.
          </div>
          <div className={styles.selectProductsOr}>
            Select Products or Services:
          </div>
        </div>
        <div className={styles.chooseProductsLabel}>
          <div className={styles.chooseSpecificProducts}>
            Choose specific products or services from the affiliate program that
            you want to promote. Focus on those that align with your niche and
            are likely to appeal to your audience.
          </div>
        </div>
        <div className={styles.promotionFramesGroup}>
          <div className={styles.createQualityContent}>
            Create Quality Content:
          </div>
          <div className={styles.developHighQualityContent}>
            Develop high-quality content to promote the products/services. This
            can include blog posts, videos, social media content, and more.
            Provide valuable information, highlight the benefits of the
            products, and incorporate your affiliate links naturally.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseNicheLabel;
