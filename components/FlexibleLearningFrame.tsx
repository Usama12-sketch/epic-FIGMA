import type { NextPage } from "next";
import styles from "./FlexibleLearningFrame.module.css";

const FlexibleLearningFrame: NextPage = () => {
  return (
    <section className={styles.flexibleLearningFrame}>
      <div className={styles.discoverPotentialFrame}>
        <div className={styles.instructionFrame}>
          <div className={styles.discoverYourPotential}>
            🔍 Discover Your Potential:
          </div>
        </div>
        <div className={styles.unleashThePower}>
          Unleash the power of effective communication through our thoughtfully
          designed English classes. Whether you're a beginner or seeking to
          refine your language skills, our expert instructors are here to guide
          you every step of the way.
        </div>
        <div className={styles.instructionFrame1}>
          <div className={styles.expertInstruction}>🎓 Expert Instruction:</div>
        </div>
        <div className={styles.expertInstructorsFrame}>
          <div className={styles.learnFromProsFrame}>
            <div className={styles.learnFromSeasoned}>
              Learn from seasoned language professionals with a passion for
              teaching. Our instructors bring a wealth of knowledge, ensuring a
              comprehensive understanding of grammar, vocabulary, and
              conversational nuances.
            </div>
          </div>
          <div className={styles.interactiveLearningExperienc}>
            🤝 Interactive Learning Experience:
          </div>
        </div>
      </div>
      <div className={styles.diveIntoA}>
        Dive into a world of interactive lessons that go beyond the textbooks.
        Engage in lively discussions, language games, and real-life scenarios to
        enhance your practical language skills. Our classes are designed to make
        learning English enjoyable and effective.
      </div>
      <div className={styles.multiLanguageFrame}>
        <div className={styles.flexibilityRedefined}>
          🌐 Flexibility Redefined:
        </div>
        <div className={styles.globalCommunityFrame}>
          <div className={styles.lifeIsBusy}>
            Life is busy, and we understand that. Our flexible class schedules
            allow you to learn at your own pace, fitting seamlessly into your
            lifestyle. No matter where you are, our virtual classrooms bring the
            world of English education to your doorstep.
          </div>
        </div>
      </div>
      <div className={styles.multiLanguageFrame1}>
        <div className={styles.trackYourProgress}>📈 Track Your Progress:</div>
        <div className={styles.monitorYourLanguageEvolutioWrapper}>
          <div className={styles.monitorYourLanguage}>
            Monitor your language evolution with regular assessments and
            feedback. Watch your confidence soar as you navigate the English
            language with ease. Celebrate milestones, both big and small, on
            your path to fluency.
          </div>
        </div>
      </div>
      <div className={styles.multiLanguageFrame2}>
        <div className={styles.globalCommunity}>🌐 Global Community:</div>
        <div className={styles.englishProficiencyOpensDoorWrapper}>
          <div className={styles.englishProficiencyOpens}>
            English proficiency opens doors to limitless opportunities. Whether
            it's academic success, career advancement, or global exploration,
            our classes equip you with the skills to navigate a world where
            English is the key to success.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibleLearningFrame;
