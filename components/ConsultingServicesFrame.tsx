import type { NextPage } from "next";
import styles from "./ConsultingServicesFrame.module.css";

const ConsultingServicesFrame: NextPage = () => {
  return (
    <section className={styles.consultingServicesFrame}>
      <div className={styles.increaseOrganicTraffic}>
        Increase Organic Traffic:
      </div>
      <div className={styles.byOptimizingYour}>
        By optimizing your website for search engines, you can attract more
        organic traffic. This can lead to increased visibility and potential
        revenue through advertising, product sales, or affiliate marketing.
      </div>
      <div className={styles.affiliateMarketing}>Affiliate Marketing:</div>
      <div className={styles.promoteProductsOr}>
        Promote products or services on your website and earn a commission for
        every sale or lead generated through your referral. SEO helps in driving
        traffic to your affiliate links.
      </div>
      <div className={styles.monetizeContent}>Monetize Content:</div>
      <div className={styles.ifYouCreate}>
        If you create valuable content, you can monetize it through various
        channels such as ads, sponsored content, or membership subscriptions.
        Higher search engine rankings can increase the visibility of your
        content.
      </div>
      <div className={styles.whatsAppFrame}>
        <div className={styles.consultingAndServices}>
          Consulting and Services:
        </div>
        <div className={styles.ifYouBecome}>
          If you become proficient in SEO, you can offer your services to
          businesses looking to improve their online visibility. This can
          include providing SEO audits, strategy development, and
          implementation.
        </div>
      </div>
    </section>
  );
};

export default ConsultingServicesFrame;
