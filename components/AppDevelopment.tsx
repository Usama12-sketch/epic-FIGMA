import type { NextPage } from "next";
import styles from "./AppDevelopment.module.css";

const AppDevelopment: NextPage = () => {
  return (
    <section className={styles.appDevelopment}>
      <h2 className={styles.theMostCommon}>
        The most common way to make money on Shopify is by selling physical
        products. You can create your own products or source them from suppliers
        and set up an online store to sell them to customers.
      </h2>
      <div className={styles.dropshippingInfo}>
        <h1 className={styles.dropshipping}>Dropshipping:</h1>
        <h2 className={styles.withDropshippingYou}>
          With dropshipping, you don't need to handle or stock the products
          yourself. Instead, you partner with a supplier who handles inventory
          and shipping. When a customer makes a purchase, the product is shipped
          directly from the supplier to the customer, and you earn a profit
          margin.
        </h2>
      </div>
      <div className={styles.developerSection}>
        <h1 className={styles.digitalProducts}>Digital Products:</h1>
      </div>
      <div className={styles.textFrame}>
        <h2 className={styles.youCanSell}>
          You can sell digital products like ebooks, software, courses, or any
          other downloadable content on Shopify. This allows you to generate
          income without the need for physical inventory or shipping.
        </h2>
      </div>
      <div className={styles.developerSection1}>
        <h1 className={styles.affiliateMarketing}>Affiliate Marketing:</h1>
      </div>
      <div className={styles.marketingArea}>
        <h2 className={styles.youCanIntegrate}>
          {" "}
          You can integrate affiliate marketing into your Shopify store by
          promoting other people's products and earning a commission for each
          sale made through your referral links.
        </h2>
      </div>
      <div className={styles.appDevelopmentSection}>
        <h1 className={styles.appDevelopment1}>App Development:</h1>
      </div>
      <h2 className={styles.developAndSell}>
        Develop and sell apps on the Shopify App Store. If you have programming
        skills, you can create apps that enhance the functionality of Shopify
        stores, and other users can purchase and use them.
      </h2>
    </section>
  );
};

export default AppDevelopment;
