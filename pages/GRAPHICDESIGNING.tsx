import type { NextPage } from "next";
import AccountManagementFrame from "../components/AccountManagementFrame";
import styles from "./GRAPHICDESIGNING.module.css";

const GRAPHICDESIGNING: NextPage = () => {
  return (
    <div className={styles.graphicDesigning}>
      <div className={styles.graphicDesigningChild} />
      <AccountManagementFrame emptyFramePadding="var(--padding-15xl) var(--padding-xl) var(--padding-17xl)" />
      <section className={styles.graphicDesignFrame}>
        <h1 className={styles.graphicDesigning1}>GRAPHIC DESIGNING</h1>
        <div className={styles.wrapperRectangleShape}>
          <img
            className={styles.rectangleShapeIcon}
            loading="eager"
            alt=""
            src="/rectangle-461@2x.png"
          />
        </div>
      </section>
      <section className={styles.graphicDesignInfoFrame}>
        <div className={styles.graphicDesignIs}>
          Graphic design is a creative process that involves combining art and
          technology to communicate ideas visually. Graphic designers use
          various visual elements, such as images, typography, and color, to
          create designs for a wide range of purposes, including advertisements,
          branding, websites, publications, and more. The goal of graphic design
          is to convey a message or evoke a specific response from the audience.
        </div>
      </section>
      <section className={styles.freelancingFrame}>
        <div className={styles.ifYoureInterested}>
          If you're interested in earning money through graphic design, here are
          several potential avenues:
        </div>
      </section>
      <section className={styles.contestsFrame}>
        <div className={styles.markplacesFrame}>
          <div className={styles.freelancing}>Freelancing:</div>
          <div className={styles.manyGraphicDesigners}>
            Many graphic designers work as freelancers, taking on projects for
            clients on a contract basis. You can find freelance opportunities on
            platforms like Upwork, Fiverr, or specialized design job boards.
            Building a strong portfolio and marketing your skills effectively is
            crucial in attracting clients.
          </div>
        </div>
        <div className={styles.markplacesFrame1}>
          <div className={styles.designContests}>Design Contests:</div>
          <div className={styles.participatingInDesign}>
            Participating in design contests on websites like 99designs or
            DesignCrowd can be a way to showcase your skills and potentially win
            prize money or secure a project.
          </div>
        </div>
        <div className={styles.markplacesFrame2}>
          <div className={styles.onlineMarketplaces}>Online Marketplaces:</div>
          <div className={styles.youCanSell}>
            You can sell your graphic designs on online marketplaces such as
            Etsy, Creative Market, or Redbubble. This allows you to earn money
            by selling digital or print-ready designs to a broader audience.
          </div>
        </div>
        <div className={styles.fulltimeEmploymentFrame}>
          <div className={styles.fullTimeEmployment}>Full-time Employment:</div>
          <div className={styles.manyCompaniesHire}>
            Many companies hire in-house graphic designers for their marketing,
            branding, or design departments. Having a strong portfolio and
            relevant education can increase your chances of landing a full-time
            position.
          </div>
        </div>
        <div className={styles.markplacesFrame3}>
          <div className={styles.createAndSell}>Create and Sell Templates:</div>
          <div className={styles.designTemplatesFor}>
            Design templates for websites, social media posts, business cards,
            or other commonly used items. You can sell these templates on
            platforms like Envato Market or TemplateMonster.
          </div>
        </div>
      </section>
      <footer className={styles.facebookInstagramFrame}>
        <div className={styles.tikTokWhatsAppFrame}>
          <div className={styles.tikTokWhatsAppFrameChild} />
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
        </div>
      </footer>
    </div>
  );
};

export default GRAPHICDESIGNING;
