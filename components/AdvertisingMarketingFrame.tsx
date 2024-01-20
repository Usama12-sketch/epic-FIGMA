import type { NextPage } from "next";
import styles from "./AdvertisingMarketingFrame.module.css";

const AdvertisingMarketingFrame: NextPage = () => {
  return (
    <section className={styles.advertisingMarketingFrame}>
      <div className={styles.salesAccountFrame}>
        <div className={styles.financialAccountManagement}>
          Financial Account Management:
        </div>
        <div className={styles.inFinanceAccount}>
          In finance, account management involves managing the financial
          portfolios of clients. Financial advisors or account managers help
          clients make investment decisions, manage risk, and achieve their
          financial goals. Earning money in financial account management often
          involves charging fees or earning commissions based on the performance
          of the managed portfolios.
        </div>
      </div>
      <div className={styles.salesAccountFrame1}>
        <div className={styles.advertisingAndMarketing}>
          Advertising and Marketing Account Management:
        </div>
        <div className={styles.inTheAdvertising}>
          In the advertising and marketing industry, account managers act as a
          liaison between clients and the agency. They ensure that clients'
          needs and expectations are met. Earning money in this context may
          involve retaining clients, securing new business, and achieving
          campaign success, which can lead to increased revenue for the agency.
          Account managers may earn a salary or receive bonuses based on client
          satisfaction and revenue generated.
        </div>
      </div>
      <div className={styles.salesAccountFrame2}>
        <div className={styles.salesAccountManagement}>
          Sales Account Management:
        </div>
        <div className={styles.inSalesAccount}>
          In sales, account managers are responsible for building and
          maintaining relationships with key clients. They aim to maximize sales
          opportunities and ensure client satisfaction. Earning money in sales
          account management often involves achieving sales targets and
          receiving commissions or bonuses based on the revenue generated from
          the managed accounts.
        </div>
      </div>
      <div className={styles.digitalMarketingFrame}>
        <div className={styles.accountManagementText}>
          <div className={styles.digitalMarketingAccount}>
            Digital Marketing Account Management:
          </div>
        </div>
        <div className={styles.inTheRealm}>
          In the realm of digital marketing, account managers oversee client
          relationships, ensuring that digital marketing strategies meet the
          client's objectives. Monetizing digital marketing account management
          may involve retaining clients, expanding services, and demonstrating
          the effectiveness of marketing campaigns. Agencies or individuals may
          earn money through service fees or commissions based on campaign
          performance.
        </div>
      </div>
    </section>
  );
};

export default AdvertisingMarketingFrame;
