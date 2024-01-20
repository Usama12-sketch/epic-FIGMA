import type { NextPage } from "next";
import styles from "./MultiFrame.module.css";

const MultiFrame: NextPage = () => {
  return (
    <section className={styles.multiFrame}>
      <div className={styles.sellingProductsOnAmazonWrapper}>
        <div className={styles.sellingProductsOn}>
          Selling Products on Amazon:
        </div>
      </div>
      <div className={styles.retailArbitragePurchaseContainer}>
        <ul className={styles.retailArbitragePurchasePro}>
          <li className={styles.retailArbitragePurchase}>
            Retail Arbitrage: Purchase products at a lower price and resell them
            on Amazon for a profit.
          </li>
          <li className={styles.privateLabelingCreate}>
            Private Labeling: Create your own brand and sell products under that
            brand on Amazon.
          </li>
          <li>
            Wholesale: Purchase products in bulk from manufacturers or
            distributors and sell them on Amazon.
          </li>
        </ul>
      </div>
      <div className={styles.amazonAffiliateProgramWrapper}>
        <div className={styles.amazonAffiliateProgram}>
          Amazon Affiliate Program:
        </div>
      </div>
      <div className={styles.earnCommissionsByPromotingWrapper}>
        <div className={styles.earnCommissionsBy}>
          Earn commissions by promoting and selling Amazon products through
          affiliate links on your website, blog, or social media.
        </div>
      </div>
      <div className={styles.merchByAmazonWrapper}>
        <div className={styles.merchByAmazon}>Merch by Amazon:</div>
      </div>
      <div className={styles.designAndSellCustomTShirtWrapper}>
        <div className={styles.designAndSell}>
          Design and sell custom T-shirts and other merchandise through the
          Merch by Amazon program.
        </div>
      </div>
      <div className={styles.kindleDirectPublishingKdpWrapper}>
        <div className={styles.kindleDirectPublishing}>
          Kindle Direct Publishing (KDP):
        </div>
      </div>
      <div className={styles.selfPublishEBooksAndEarnWrapper}>
        <div className={styles.selfPublishEBooksAnd}>
          Self-publish e-books and earn royalties through the sale of your books
          on the Kindle platform.
        </div>
      </div>
      <div className={styles.multiFrameInner}>
        <div className={styles.frameParent}>
          <div className={styles.amazonHandmadeWrapper}>
            <div className={styles.amazonHandmade}>Amazon Handmade:</div>
          </div>
          <div className={styles.sellHandmadeProductsOnAmazWrapper}>
            <div className={styles.sellHandmadeProducts}>
              Sell handmade products on Amazon's Handmade platform.
            </div>
          </div>
          <div className={styles.amazonMechanicalTurk}>
            Amazon Mechanical Turk:
          </div>
          <div className={styles.completeSmallTasks}>
            Complete small tasks, known as Human Intelligence Tasks (HITs), for
            pay through the Amazon Mechanical Turk platform.
          </div>
          <div className={styles.amazonFbaFulfillment}>
            Amazon FBA (Fulfillment by Amazon):
          </div>
          <div className={styles.sendYourProducts}>
            Send your products to Amazon's fulfillment centers, and they will
            handle storage, packing, and shipping. This allows you to reach a
            wider customer base.
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiFrame;
