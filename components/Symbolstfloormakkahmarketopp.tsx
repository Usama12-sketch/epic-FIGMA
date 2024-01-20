import type { NextPage } from "next";
import styles from "./Symbolstfloormakkahmarketopp.module.css";

const Symbolstfloormakkahmarketopp: NextPage = () => {
  return (
    <div className={styles.symbolstfloormakkahmarketopp}>
      <div className={styles.servicesFrame}>
        <div className={styles.ourServicesFrame}>
          <img
            className={styles.ourServicesFrameChild}
            loading="eager"
            alt=""
            src="/group-8.svg"
          />
          <div className={styles.affiliateMarketingComponent}>
            <div className={styles.sEO}>100+</div>
            <div className={styles.completeProject}>Complete Project</div>
          </div>
        </div>
      </div>
      <div className={styles.graphicDesignComponent}>
        <img className={styles.svgIcon} loading="eager" alt="" src="/svg.svg" />
        <div className={styles.videoEditingComponent}>
          <div className={styles.facebookFrameGroup}>30+</div>
          <div className={styles.professional}>
            <span>
              <p className={styles.professional1}>Professional</p>
              <p className={styles.p}>{` `}</p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.tikTokFrameGroup}>
        <div className={styles.whatsAppFrameGroup}>
          <img
            className={styles.whatsAppFrameGroupChild}
            loading="eager"
            alt=""
            src="/group-7.svg"
          />
          <div className={styles.symbolFrame}>
            <div className={styles.envelopeSimplexFrame}>230+</div>
            <div className={styles.totalSales}>Total Sales</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symbolstfloormakkahmarketopp;
