import type { NextPage } from "next";

import styles from "./FrameHOME.module.css";
import Navbar from "./Navbar"

const FrameHOME: NextPage = () => {

  

  return (
    <section className={styles.frameHOME}>
      <img className={styles.frameHOMEChild} alt="" src="/rectangle-1@2x.png" />
      <div className={styles.frameABOUTUS}>
        {/* <Navbar /> */}
       
      </div>
      <div className={styles.tikTokLogo}>
        <div className={styles.whatsAppLogo}>
          <h1 className={styles.thinkBigFullfill}>
            “Think big, fullfill your dreams”
          </h1>
          <div className={styles.epicinternationalofficialgmail}>
            <div className={styles.contactUs}>
              <b className={styles.contactUs1}>Contact us</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameHOME;
