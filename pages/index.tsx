import type { NextPage } from "next";
import FrameHOME from "../components/FrameHOME";
import FrameComponent1 from "../components/FrameComponent1";
import Symbolstfloormakkahmarketopp from "../components/Symbolstfloormakkahmarketopp";
import FrameComponent from "../components/FrameComponent";
import GetInTouch from "../components/GetInTouch";
import VideoEditing from "../components/VideoEditing";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <FrameHOME />
      <FrameComponent1 />
      <div className={styles.homeInner}>
        <div className={styles.frameParent}>
          <div className={styles.expertsGrowtsParent}>
            <div className={styles.expertsGrowts}>Experts growts</div>
            <h3 className={styles.heading2}>Our Company Growth</h3>
          </div>
          <Symbolstfloormakkahmarketopp />
        </div>
      </div>
      <div className={styles.stFloorMakkahMarketText}>
        <FrameComponent />
      </div>
      <section className={styles.homeChild}>
        <div className={styles.frameGroup}>
          <div className={styles.topExpertiesParent}>
            <div className={styles.topExperties}>Top Experties</div>
            <h3 className={styles.heading2Container}>
              <span>
                <p className={styles.hereAreSome}>
                  Here Are Some Tools And Technologies
                </p>
                <p className={styles.weUse}>We Use</p>
              </span>
            </h3>
          </div>
          <img
            className={styles.download1040ddb4d818e08d921eIcon}
            loading="eager"
            alt=""
            src="/download-1040ddb4d818e08d921eepng@2x.png"
          />
        </div>
      </section>
      <div className={styles.ourServicesFrame}>
        <div className={styles.ourTopServices}>Our Top Services</div>
        <h3
          className={styles.heading21}
          data-scroll-to="heading2"
        >{`We Provide Different Services `}</h3>
      </div>
      <section className={styles.sEO}>
        <GetInTouch />
        <div className={styles.digitalMarketing}>
          <VideoEditing />
        </div>
        <div className={styles.getInTouchFrame}>
          <div className={styles.aFFILIATEMARKET}>
            <div className={styles.aCCOUNTSMANAGEM}>
              <button className={styles.component9}>
                <div className={styles.component9Child} />
                <div className={styles.affiliateMarketing}>
                  AFFILIATE MARKETING
                </div>
              </button>
            </div>
            <button className={styles.component10}>
              <div className={styles.videoEditing} />
              <div className={styles.accountsManagement}>
                ACCOUNTS MANAGEMENT
              </div>
            </button>
          </div>
        </div>
        <div className={styles.accountsManagementInstance}>
          <button className={styles.component11}>
            <div className={styles.facebookInstagramTikTokWha} />
            <div className={styles.seo}>SEO</div>
          </button>
        </div>
      </section>
      <div className={styles.contactFrame}>
        <div className={styles.brandCollaboration}>
          <div className={styles.getInTouch}>Get in Touch</div>
          <h3 className={styles.heading22}>Contact Us</h3>
        </div>
      </div>
      <section className={styles.socialMediaIconsFrame}>
        <div className={styles.facebookInstagramTickTokWh}>
          <div className={styles.vectorParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-10@2x.png"
            />
            <img
              className={styles.frameItem}
              loading="eager"
              alt=""
              src="/rectangle-9@2x.png"
            />
          </div>
          <div className={styles.facebookInstagramTickTokWhInner}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.symbolParent}>
                  <div className={styles.symbol}></div>
                  <div className={styles.parent}>
                    <div className={styles.div}>{`+92 347 1892960  `}</div>
                    <div className={styles.div1}>+92 344 4408025</div>
                  </div>
                </div>
                <div className={styles.envelopesimple42x2f7dba547cParent}>
                  <input
                    className={styles.envelopesimple42x2f7dba547c}
                    type="checkbox"
                  />
                  <div className={styles.epicinternationalofficialgmai}>
                    epicinternationalofficial@gmail.com
                  </div>
                </div>
              </div>
              <div className={styles.stFloorMakkahMarketOppositWrapper}>
                <div className={styles.stFloorMakkah}>
                  1st Floor Makkah Market Opposite Kunj Ground Near Sarban Chowk
                  , ABBOTTABAD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.socialMediaFrames}>
        <div className={styles.socialMediaFramesChild} />
        <div className={styles.socialMediaLogos}>
          <div className={styles.socialMediaFramesSet}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.socialMediaFramesSet1}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.socialMediaFramesSet2}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.socialMediaFramesSet3}>
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

export default Home;
