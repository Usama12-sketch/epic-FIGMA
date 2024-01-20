import type { NextPage } from "next";
import FacebookInstagramTwitterWha from "../components/FacebookInstagramTwitterWha";
import styles from "./UIUX.module.css";

const UIUX: NextPage = () => {
  return (
    <div className={styles.uiux}>
      <div className={styles.uiuxChild} />
      <header className={styles.uIUXParent}>
        <div className={styles.aboutUs}>
          <div className={styles.aboutUs1}>About us</div>
        </div>
        <div className={styles.uXText} />
        <div className={styles.home}>HOME</div>
        <div className={styles.aboutUs2}>ABOUT US</div>
        <div className={styles.ourServices}>OUR SERVICES</div>
        <div className={styles.ourCources}>OUR COURCES</div>
      </header>
      <section className={styles.uIUXDesignFrameParent}>
        <div className={styles.uIUXDesignFrame}>
          <h1 className={styles.uiuxDesigning}>UI/UX DESIGNING</h1>
        </div>
        <div className={styles.wrapperRectangle46}>
          <img
            className={styles.wrapperRectangle46Child}
            loading="eager"
            alt=""
            src="/rectangle-4612@2x.png"
          />
        </div>
      </section>
      <section className={styles.uIUXLabelWrapper}>
        <div className={styles.uIUXLabel}>
          <div className={styles.uiuxStandsFor}>
            UI/UX stands for User Interface (UI) and User Experience (UX), which
            are two critical aspects of designing and developing digital
            products such as websites, mobile apps, and software.
          </div>
          <div className={styles.briefOverview}>
            <div className={styles.heresABrief}> Here's a brief overview:</div>
          </div>
        </div>
      </section>
      <section className={styles.freelancingFrame}>
        <div className={styles.userInterfaceUi}>User Interface (UI):</div>
        <div className={styles.thisFocusesOn}>
          This focuses on the visual elements and overall design of a product.
          UI designers are responsible for creating the look and feel of an
          application, including layout, color schemes, typography, and other
          visual elements.
        </div>
        <div className={styles.sellResourcesFrame}>
          <div className={styles.userExperienceUx}>User Experience (UX):</div>
          <div className={styles.thisInvolvesThe}>
            This involves the overall experience a user has while interacting
            with a product. UX designers work to enhance the usability,
            accessibility, and satisfaction of the user by considering factors
            such as user research, information architecture, wireframing, and
            prototyping.
          </div>
        </div>
      </section>
      <FacebookInstagramTwitterWha />
      <footer className={styles.facebookFrame}>
        <div className={styles.facebookFrameChild} />
        <div className={styles.instagramFrame}>
          <div className={styles.tikTokFrame}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.tikTokFrame1}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.tikTokFrame2}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.tikTokFrame3}>
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

export default UIUX;
