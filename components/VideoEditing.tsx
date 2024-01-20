import type { NextPage } from "next";
import styles from "./VideoEditing.module.css";

const VideoEditing: NextPage = () => {
  return (
    <div className={styles.videoEditing}>
      <button className={styles.component6}>
        <div className={styles.aCCOUNTS} />
        <div className={styles.graphicDesign}>GRAPHIC DESIGN</div>
      </button>
      <button className={styles.component7}>
        <div className={styles.component7Child} />
        <div className={styles.digitalMarketing}>DIGITAL MARKETING</div>
      </button>
      <button className={styles.component8}>
        <div className={styles.component8Child} />
        <div className={styles.videoEditing1}>VIDEO EDITING</div>
      </button>
    </div>
  );
};

export default VideoEditing;
