import type { NextPage } from "next";
import styles from "./ABOUT.module.css";

const ABOUT: NextPage = () => {
  return (
    <div className={styles.about}>
      <main className={styles.homeFrame}>
        <header className={styles.aboutFrame}>
          <div className={styles.aboutUs}>
            <div className={styles.aboutUs1}>About us</div>
          </div>
          <div className={styles.aboutFrameChild} />
          <div className={styles.home}>HOME</div>
          <div className={styles.aboutUs2}>ABOUT US</div>
          <div className={styles.ourServices}>OUR SERVICES</div>
          <div className={styles.ourCources}>OUR COURCES</div>
        </header>
        <section className={styles.homeFrameInner}>
          <div className={styles.storyFrameParent}>
            <div className={styles.storyFrame}>
              <h1 className={styles.ourStory}>OUR STORY</h1>
            </div>
            <div className={styles.ourTeamTextParent}>
              <div className={styles.ourTeamText}>
                <h2 className={styles.ourTeamOf}>
                  Our team of experts is constantly pushing the boundaries of
                  technology to bring you the mostadvanced and user-friendly
                  software on the market. Whether you're looking to streamline
                  youroperations, improve your customer experience, or simply
                  stay ahead of the competition, we havethe tools and expertise
                  to help you achieve your goals. Browse our website to learn
                  more about our products and services, and discover how we can
                  help you succeed in today's connected world.
                </h2>
              </div>
              <img
                className={styles.todayFrameIcon}
                loading="eager"
                alt=""
                src="/frame-3.svg"
              />
            </div>
            <div className={styles.messageFrame}>
              <div className={styles.contentFrame}>
                <div className={styles.missionFrame}>
                  <h1 className={styles.ourMission}>OUR MISSION</h1>
                </div>
                <h2 className={styles.ourMissionIs}>
                  "Our mission is to elevate the digital experience to new
                  heights by bringing Epic to the forefront. We aspire to
                  revolutionize and positively impact people's lives by
                  providing them with unparalleled opportunities. Our commitment
                  lies in delivering a high-level experience that transcends
                  expectations.”
                </h2>
              </div>
            </div>
            <div className={styles.facebookFrame}>
              <h2 className={styles.weAimTo}>
                We aim to bring about transformative changes in the lives of
                individuals, offering them the best opportunities for personal
                and professional growth. Our dedication to privacy and security
                is unwavering, ensuring that every project we undertake is
                completed with the utmost integrity.
              </h2>
            </div>
            <div className={styles.tikTokFrame}>
              <h2 className={styles.todayEpicInternational}>
                Today, Epic International and Co. continues to push the
                boundaries of what's possible with technology, always striving
                tomake a positive impact. We invite you to join us on this
                journey to help you produce Superiorproducts that will make your
                customers' lives better.
              </h2>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.multiSocialFrame}>
        <div className={styles.multiSocialFrameChild} />
        <div className={styles.socialIconFramesParent}>
          <div className={styles.socialIconFrames}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.socialIconFrames1}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.socialIconFrames2}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.socialIconFrames3}>
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

export default ABOUT;
