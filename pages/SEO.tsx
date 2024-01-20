import type { NextPage } from "next";
import AccountManagementFrame from "../components/AccountManagementFrame";
import ConsultingServicesFrame from "../components/ConsultingServicesFrame";
import styles from "./SEO.module.css";

const SEO: NextPage = () => {
  return (
    <div className={styles.seo}>
      <div className={styles.seoChild} />
      <AccountManagementFrame emptyFramePadding="var(--padding-16xl) var(--padding-xl)" />
      <section className={styles.sEOText}>
        <h1 className={styles.seo1}>SEO</h1>
        <div className={styles.wrapperRectangle46}>
          <img
            className={styles.wrapperRectangle46Child}
            loading="eager"
            alt=""
            src="/rectangle-468@2x.png"
          />
        </div>
      </section>
      <section className={styles.sEOInfoFrame}>
        <div className={styles.seoStandsFor}>
          SEO stands for Search Engine Optimization. It is the practice of
          optimizing a website or online content to improve its visibility and
          ranking on search engine results pages (SERPs). The goal of SEO is to
          increase organic (non-paid) traffic to a website by making it more
          appealing to search engines and providing valuable content for users.
        </div>
        <div className={styles.asForEarning}>
          As for earning money through SEO, there are several ways:
        </div>
      </section>
      <ConsultingServicesFrame />
      <footer className={styles.childFrameset}>
        <div className={styles.facebookInstaTikWhatsFrame}>
          <div className={styles.facebookInstaTikWhatsFrameChild} />
          <div className={styles.framesetFrame}>
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
        </div>
      </footer>
    </div>
  );
};

export default SEO;
