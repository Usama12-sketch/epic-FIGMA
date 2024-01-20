import type { NextPage } from "next";
import ChooseNicheLabel from "../components/ChooseNicheLabel";
import styles from "./AFFILIATE.module.css";

const AFFILIATE: NextPage = () => {
  return (
    <div className={styles.affiliate}>
      <div className={styles.affiliateChild} />
      <header className={styles.nestedFrames}>
        <div className={styles.aboutUs}>
          <div className={styles.aboutUs1}>About us</div>
        </div>
        <div className={styles.homeRectangle} />
        <div className={styles.home}>HOME</div>
        <div className={styles.aboutUs2}>ABOUT US</div>
        <div className={styles.ourServices}>OUR SERVICES</div>
        <div className={styles.ourCources}>OUR COURCES</div>
      </header>
      <section className={styles.subSectionsFrame}>
        <div className={styles.affiliateMarketingLabel}>
          <h1 className={styles.affiliateMarketing}>AFFILIATE MARKETING</h1>
        </div>
        <div className={styles.wrapperRectangle46}>
          <img
            className={styles.wrapperRectangle46Child}
            loading="eager"
            alt=""
            src="/rectangle-4610@2x.png"
          />
        </div>
      </section>
      <section className={styles.howToEarnFrame}>
        <div className={styles.affiliateMarketingIs}>
          Affiliate marketing is a performance-based marketing strategy where
          individuals (affiliates) earn a commission for promoting and
          generating sales or leads for a merchant's products or services. It's
          a mutually beneficial arrangement where affiliates are rewarded for
          driving traffic and customers to the merchant's site.
        </div>
      </section>
      <section className={styles.nicheSelectionFrame}>
        <div className={styles.heresAStepByStep}>
          Here's a step-by-step guide on how you can earn money through
          affiliate marketing:
        </div>
      </section>
      <ChooseNicheLabel />
      <footer className={styles.tikTokWhatsAppFrame}>
        <div className={styles.tikTokWhatsAppFrameChild} />
        <div className={styles.multiSocialMediaFrame}>
          <div className={styles.socialMediaFrames}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.socialMediaFrames1}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.socialMediaFrames2}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.socialMediaFrames3}>
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

export default AFFILIATE;
