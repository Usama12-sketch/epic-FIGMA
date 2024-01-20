import type { NextPage } from "next";
import styles from "./GetInTouch.module.css";

const GetInTouch: NextPage = () => {
  return (
    <div className={styles.getInTouch}>
      <div className={styles.component}>
        <button className={styles.component2}>
          <div className={styles.component2Child} />
          <div className={styles.uiuxDesign}>UI/UX DESIGN</div>
        </button>
      </div>
      <button className={styles.component3}>
        <div className={styles.facebookInstagramTikTokWha} />
        <div className={styles.webDevelopment}>WEB DEVELOPMENT</div>
      </button>
      <button className={styles.component4}>
        <div className={styles.component4Child} />
        <div className={styles.amazon}>{`AMAZON `}</div>
      </button>
      <button className={styles.component5}>
        <div className={styles.component5Child} />
        <div className={styles.shopify}>SHOPIFY</div>
      </button>
    </div>
  );
};

export default GetInTouch;
