import type { NextPage } from "next";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.freelancingWrapper}>
        <div className={styles.freelancing}>Freelancing:</div>
      </div>
      <div className={styles.offerYourDigitalMarketingSWrapper}>
        <div className={styles.offerYourDigital}>
          Offer your digital marketing services as a freelancer. Many
          businesses, especially smaller ones, are looking for individuals with
          digital marketing skills to help them with online promotion.
        </div>
      </div>
      <div className={styles.affiliateMarketingWrapper}>
        <div className={styles.affiliateMarketing}>Affiliate Marketing:</div>
      </div>
      <div className={styles.promoteOtherPeoplesProductWrapper}>
        <div className={styles.promoteOtherPeoples}>
          Promote other people's products or services and earn a commission for
          every sale or lead generated through your marketing efforts. This
          often involves sharing affiliate links on your website, blog, or
          social media.
        </div>
      </div>
      <div className={styles.createAndSellOnlineCoursesParent}>
        <div className={styles.createAndSell}>
          Create and Sell Online Courses:
        </div>
        <div className={styles.ifYouHave}>
          If you have expertise in a particular aspect of digital marketing,
          consider creating and selling online courses. Platforms like Udemy or
          Teachable allow you to reach a global audience.
        </div>
      </div>
      <div className={styles.consultingParent}>
        <div className={styles.consulting}>Consulting:</div>
        <div className={styles.provideDigitalMarketing}>
          Provide digital marketing consulting services to businesses. This
          could involve helping them develop a comprehensive digital marketing
          strategy, optimize their website, or improve their social media
          presence.
        </div>
      </div>
      <div className={styles.googleAdsenseParent}>
        <div className={styles.googleAdsense}>Google AdSense:</div>
        <div className={styles.ifYouHave1}>
          If you have a website or blog with a decent amount of traffic, you can
          apply for Google AdSense. This program allows you to display ads on
          your site, and you earn money when visitors click on those ads.
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
