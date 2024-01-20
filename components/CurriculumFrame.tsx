import type { NextPage } from "next";
import styles from "./CurriculumFrame.module.css";

const CurriculumFrame: NextPage = () => {
  return (
    <section className={styles.curriculumFrame}>
      <div className={styles.curriculumText}>
        <div className={styles.expertGuidance}>✨ Expert Guidance:</div>
        <div className={styles.resourcesFrame}>
          <div className={styles.learnFromSeasoned}>
            Learn from seasoned IELTS instructors with a track record of
            success. Our experts are dedicated to nurturing your language
            skills, focusing on all aspects of the IELTS exam.
          </div>
        </div>
      </div>
      <div className={styles.socialMediaFrame}>
        <div className={styles.tailoredCurriculum}>✨ Tailored Curriculum:</div>
      </div>
      <div className={styles.facebookFrame}>
        <div className={styles.ourCurriculumIs}>
          Our curriculum is meticulously crafted to address the unique
          challenges of the IELTS test. From mastering vocabulary to perfecting
          your speaking skills, we cover it all.
        </div>
      </div>
      <div className={styles.tikTokFrame}>
        <div className={styles.interactiveLearning}>
          ✨ Interactive Learning:
        </div>
      </div>
      <div className={styles.engageInDynamicInteractiveWrapper}>
        <div className={styles.engageInDynamic}>
          Engage in dynamic, interactive sessions that go beyond traditional
          teaching. Participate in discussions, role-plays, and real-life
          scenarios to boost your confidence in using English fluently.
        </div>
      </div>
      <div className={styles.comprehensiveResourcesParent}>
        <div className={styles.comprehensiveResources}>
          ✨ Comprehensive Resources:
        </div>
        <div className={styles.accessATreasureTroveOfStuWrapper}>
          <div className={styles.accessATreasure}>
            Access a treasure trove of study materials, practice tests, and
            resources designed to equip you for every section of the IELTS exam.
            Our library ensures you are well-prepared for success.
          </div>
        </div>
      </div>
      <div className={styles.flexibleSchedulingParent}>
        <div className={styles.flexibleScheduling}>✨ Flexible Scheduling:</div>
        <div className={styles.flexibleScheduleFrame}>
          <div className={styles.weUnderstandThe}>
            We understand the demands of your busy life. Choose from flexible
            class timings to fit your schedule and learn at your own pace
            without compromising on the quality of instruction.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumFrame;
