import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./FrameHOME.module.css";

const FrameHOME: NextPage = () => {
  const router = useRouter();

  const onABOUTUSTextClick = useCallback(() => {
    router.push("/ABOUT");
  }, [router]);

  const onOURSERVICESTextClick = useCallback(() => {
    router.push("/AboutUs");
  }, [router]);

  const onOURCOURCESTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heading2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.frameHOME}>
      <img className={styles.frameHOMEChild} alt="" src="/rectangle-1@2x.png" />
      <div className={styles.frameABOUTUS}>
        <div className={styles.frameSERVICES}>
          <img
            className={styles.framePORTFOLIO}
            loading="eager"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <b className={styles.epicInternationalAnd}>
            Epic International and Co.
          </b>
        </div>
        <nav className={styles.frameCONTACTUS}>
          <div className={styles.facebookLogo}>
            <div className={styles.home}>HOME</div>
          </div>
          <div className={styles.facebookLogo1}>
            <div className={styles.aboutUs} onClick={onABOUTUSTextClick}>
              ABOUT US
            </div>
          </div>
          <div className={styles.ourServices} onClick={onOURSERVICESTextClick}>
            OUR SERVICES
          </div>
          <div className={styles.ourCources} onClick={onOURCOURCESTextClick}>
            OUR COURCES
          </div>
        </nav>
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
