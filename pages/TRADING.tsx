import type { NextPage } from "next";
import AccountManagementFrame from "../components/AccountManagementFrame";
import styles from "./TRADING.module.css";

const TRADING: NextPage = () => {
  return (
    <div className={styles.trading}>
      <div className={styles.tradingChild} />
      <main className={styles.tradingFrame}>
        <AccountManagementFrame emptyFramePadding="var(--padding-16xl) var(--padding-xl) var(--padding-16xl) 98px" />
        <section className={styles.tradingText}>
          <h1 className={styles.trading1}>TRADING</h1>
          <div className={styles.wrapperRectangle46}>
            <img
              className={styles.wrapperRectangle46Child}
              loading="eager"
              alt=""
              src="/rectangle-467@2x.png"
            />
          </div>
        </section>
        <section className={styles.tradingRefersTo}>
          Trading refers to the buying and selling of financial instruments,
          such as stocks, bonds, commodities, currencies, and derivatives, with
          the goal of making a profit. Traders engage in the financial markets
          to take advantage of price fluctuations and seek opportunities to buy
          low and sell high. Trading can be done in various markets, including
          stock markets, forex (foreign exchange) markets, commodities markets,
          and others.
        </section>
      </main>
      <footer className={styles.facebookInstagramFrames}>
        <div className={styles.whatsAppFrame}>
          <div className={styles.whatsAppFrameChild} />
          <div className={styles.socialMediaFrame}>
            <div className={styles.platformFrames}>
              <img
                className={styles.facebookIcon}
                loading="eager"
                alt=""
                src="/facebook@2x.png"
              />
            </div>
            <div className={styles.platformFrames1}>
              <img
                className={styles.instagramIcon}
                loading="eager"
                alt=""
                src="/instagram@2x.png"
              />
            </div>
            <div className={styles.platformFrames2}>
              <img
                className={styles.tiktokIcon}
                loading="eager"
                alt=""
                src="/tiktok@2x.png"
              />
            </div>
            <div className={styles.platformFrames3}>
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

export default TRADING;
