import type { NextPage } from "next";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.ourMissionWrapper}>
          <h1 className={styles.ourMission}>OUR MISSION</h1>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                loading="eager"
                alt=""
                src="/ellipse-2@2x.png"
              />
              <img
                className={styles.frameItem}
                alt=""
                src="/ellipse-3@2x.png"
              />
            </div>
          </div>
          <h3 className={styles.weAimToContainer}>
            <span className={styles.weAimToContainer1}>
              <span>{`We aim to bring about transformative changes in the lives of individuals, offering them the best opportunities for personal and professional growth. Our dedication to privacy and security is unwavering, ensuring that every project we undertake is completed with the utmost integrity. `}</span>
              <span className={styles.learnMore}>Learn more</span>
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
