import type { NextPage } from "next";
import styles from "./DesignSection.module.css";

const DesignSection: NextPage = () => {
  return (
    <section className={styles.designSection}>
      <div className={styles.wireframeCreation}>
        <div className={styles.ideaAndPlanning}>Idea and Planning:</div>
      </div>
      <div className={styles.userDesign}>
        <div className={styles.defineThePurposeContainer}>
          <p className={styles.blankLine}>&nbsp;</p>
          <ul className={styles.defineThePurposeOfYourApp}>
            <li className={styles.defineThePurpose}>
              Define the purpose of your app.
            </li>
            <li className={styles.identifyYourTarget}>
              Identify your target audience.
            </li>
            <li>Plan the features and functionality of your app.</li>
          </ul>
        </div>
      </div>
      <div className={styles.writeCode}>
        <div className={styles.design}>Design:</div>
      </div>
      <div className={styles.testApp}>
        <div className={styles.createWireframesAndContainer}>
          <ul className={styles.createWireframesAndPrototyp}>
            <li className={styles.createWireframesAnd}>
              Create wireframes and prototypes.
            </li>
            <li>Design the user interface (UI) and user experience (UX).</li>
          </ul>
        </div>
      </div>
      <div className={styles.deploymentFrame}>
        <div className={styles.submitToStores}>
          <div className={styles.development}>Development:</div>
        </div>
        <div className={styles.facebookInstagramTikTokWha}>
          <div className={styles.writeTheCodeContainer}>
            <ul className={styles.writeTheCodeForYourAppT}>
              <li className={styles.writeTheCode}>
                Write the code for your app.
              </li>
              <li>Test the app during development to identify and fix bugs.</li>
            </ul>
          </div>
        </div>
        <div className={styles.testingWrapper}>
          <div className={styles.testing}>Testing:</div>
        </div>
        <div className={styles.conductThoroughTestingContainer}>
          <p className={styles.blankLine1}>&nbsp;</p>
          <ul className={styles.conductThoroughTestingToEn}>
            <li className={styles.conductThoroughTesting}>
              Conduct thorough testing to ensure the app functions correctly and
              meets user expectations.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.deploymentHub}>
        <div className={styles.deployment}>Deployment:</div>
      </div>
      <div className={styles.submitYourAppContainer}>
        <ul className={styles.submitYourAppToTheRespect}>
          <li className={styles.submitYourApp}>
            Submit your app to the respective app stores (e.g., Apple App Store,
            Google Play Store).
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DesignSection;
