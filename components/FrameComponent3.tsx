import type { NextPage } from "next";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: NextPage = () => {
  return (
    <section className={styles.webDevelopmentInner}>
      <div className={styles.frameParent}>
        <div className={styles.freelancingParent}>
          <h1 className={styles.freelancing}>Freelancing:</h1>
          <h2 className={styles.manyWebDevelopers}>
            Many web developers work as freelancers, taking on projects from
            clients. Platforms like Upwork, Freelancer, and Fiverr connect
            freelancers with clients looking for web development services.
          </h2>
        </div>
        <div className={styles.fullTimeEmploymentParent}>
          <h1 className={styles.fullTimeEmployment}>Full-time Employment:</h1>
          <h2 className={styles.webDevelopersCan}>
            Web developers can work as full-time employees for companies,
            agencies, or organizations. They may be responsible for maintaining
            existing websites or developing new ones.
          </h2>
        </div>
        <div className={styles.buildingAndSellingWebsitesParent}>
          <h1 className={styles.buildingAndSelling}>
            Building and Selling Websites:
          </h1>
          <h2 className={styles.someDevelopersCreate}>
            Some developers create websites or web applications with the
            intention of selling them. This could involve developing a niche
            site, improving its functionality and design, and then selling it to
            someone interested in owning and running it.
          </h2>
        </div>
        <div className={styles.affiliateMarketingParent}>
          <h1 className={styles.affiliateMarketing}>Affiliate Marketing:</h1>
          <h2 className={styles.ifYouHave}>
            If you have a blog or website that attracts traffic, you can earn
            money through affiliate marketing by promoting products or services
            and earning a commission for each sale or lead generated through
            your referral.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
