import type { NextPage } from "next";
import styles from "./QURAN.module.css";

const QURAN: NextPage = () => {
  return (
    <div className={styles.quran}>
      <header className={styles.homeFrame}>
        <div className={styles.aboutUs}>
          <div className={styles.aboutUs1}>About us</div>
        </div>
        <div className={styles.quranLearningFrame} />
        <div className={styles.home}>HOME</div>
        <div className={styles.aboutUs2}>ABOUT US</div>
        <div className={styles.ourServices}>OUR SERVICES</div>
        <div className={styles.ourCources}>OUR COURCES</div>
      </header>
      <section className={styles.quranTextFrameParent}>
        <div className={styles.quranTextFrame}>
          <h1 className={styles.quranLearning}>QURAN LEARNING</h1>
        </div>
        <div className={styles.wrapperUnlockFrame}>
          <img
            className={styles.unlockFrameIcon}
            loading="eager"
            alt=""
            src="/rectangle-465@2x.png"
          />
        </div>
      </section>
      <section className={styles.comfortFrame}>
        <div className={styles.unlockTheBeauty}>
          Unlock the Beauty of the Quran from the Comfort of Your Home! 🌟
        </div>
      </section>
      <section className={styles.onlineFrame}>
        <div className={styles.embarkOnA}>
          Embark on a transformative journey with our Online Quran Classes,
          where the divine verses come to life in the digital realm. Our
          platform brings together the richness of Islamic teachings with the
          convenience of modern technology.
        </div>
      </section>
      <section className={styles.expertGuideFrame}>
        <div className={styles.oneononeSessionsFrame}>
          <div className={styles.interactiveSessionsFrame}>
            <div className={styles.expertGuidance}>📚 Expert Guidance:</div>
          </div>
          <div className={styles.learnFromSeasoned}>
            Learn from seasoned Quranic scholars and certified instructors who
            are passionate about sharing the wisdom of the Quran.
          </div>
          <div className={styles.interactiveSessionsFrame1}>
            <div className={styles.flexibleLearning}>🌐 Flexible Learning:</div>
          </div>
          <div className={styles.interactiveSessionsFrame2}>
            <div className={styles.embraceTheFlexibility}>
              {" "}
              Embrace the flexibility of tailored schedules that adapt to your
              lifestyle, enabling you to dive into the sacred teachings without
              compromising your daily commitments.
            </div>
          </div>
          <div className={styles.interactiveSessionsFrame3}>
            <div className={styles.personalizedAttention}>
              👩‍🏫 Personalized Attention:
            </div>
          </div>
          <div className={styles.whetherYouChoose}>
            Whether you choose one-on-one sessions or join a vibrant group, our
            classes ensure personalized attention to nurture your understanding
            and proficiency.
          </div>
          <div className={styles.interactiveSessionsFrame4}>
            <div className={styles.interactiveSessions}>
              🤝 Interactive Sessions:
            </div>
          </div>
          <div className={styles.interactiveSessionsFrame5}>
            <div className={styles.engageInLively}>
              Engage in lively discussions, ask questions, and receive
              constructive feedback. Our interactive approach fosters a sense of
              community, making learning a collaborative and enriching
              experience.
            </div>
          </div>
        </div>
        <div className={styles.safeLearningEnvironmentFram}>
          <div className={styles.platformFrame}>
            <div className={styles.safeLearningEnvironment}>
              🌺 Safe Learning Environment:
            </div>
            <div className={styles.respectfulSpacesFrame}>
              <div className={styles.ourPlatformPrioritizes}>
                Our platform prioritizes a secure and respectful space for
                learners of all ages. Feel the warmth of a community that
                cherishes diversity and mutual respect.
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.instagramFrame}>
        <div className={styles.instagramFrameChild} />
        <div className={styles.tikTokFrame}>
          <div className={styles.whatsAppFrame}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.whatsAppFrame1}>
            <img
              className={styles.instagramIcon}
              loading="eager"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
          <div className={styles.whatsAppFrame2}>
            <img
              className={styles.tiktokIcon}
              loading="eager"
              alt=""
              src="/tiktok@2x.png"
            />
          </div>
          <div className={styles.whatsAppFrame3}>
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

export default QURAN;
