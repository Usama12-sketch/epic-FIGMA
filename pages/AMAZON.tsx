import type { NextPage } from "next";
import MultiFrame from "../components/MultiFrame";
import styles from "./AMAZON.module.css";

const AMAZON: NextPage = () => {
  return (
    <div className={styles.amazon}>
      <div className={styles.amazonChild} />
      <header className={styles.aboutUsParent}>
        <div className={styles.aboutUs}>
          <div className={styles.aboutUs1}>About us</div>
        </div>
        <div className={styles.instanceFrame} />
        <div className={styles.home}>HOME</div>
        <div className={styles.aboutUs2}>ABOUT US</div>
        <div className={styles.ourServices}>OUR SERVICES</div>
        <div className={styles.ourCources}>OUR COURCES</div>
      </header>
      <section className={styles.amazonParent}>
        <h1 className={styles.amazon1}>{`AMAZON `}</h1>
        <div className={styles.wrapperRectangle46}>
          <img
            className={styles.wrapperRectangle46Child}
            loading="eager"
            alt=""
            src="/rectangle-4614@2x.png"
          />
        </div>
      </section>
      <section className={styles.amazonIsAMultinationalTechParent}>
        <div className={styles.amazonIsA}>
          Amazon is a multinational technology and e-commerce company based in
          Seattle, Washington, USA. Founded by Jeff Bezos in 1994, Amazon
          started as an online bookstore but quickly expanded its business to
          include a variety of products and services. Today, Amazon is one of
          the largest and most diverse online retailers in the world, offering a
          wide range of products, including electronics, books, clothing, and
          more. In addition to its e-commerce platform, Amazon is involved in
          various other businesses, such as cloud computing, streaming services,
          and artificial intelligence.
        </div>
        <div className={styles.thereAreSeveral}>
          There are several ways individuals and businesses can earn money
          through Amazon. Here are some common methods:
        </div>
      </section>
      <MultiFrame />
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.facebookWrapper}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.instagramWrapper}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.tiktokWrapper}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.whatsappWrapper}>
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

export default AMAZON;
