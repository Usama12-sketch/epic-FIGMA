import type { NextPage } from "next";
import styles from "./FrameComponent.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.ourTopCoursesParent}>
      <div className={styles.ourTopCourses}>Our Top Courses</div>
      <div className={styles.heading2OurCompanyGrowthParent}>
        <h3 className={styles.heading2}>{`Our Tranding Cources `}</h3>
        <div className={styles.instanceParent}>
          <img
            className={styles.frameChild}
            loading="eager"
            alt=""
            src="/rectangle-8@2x.png"
          />
          <img
            className={styles.frameItem}
            loading="eager"
            alt=""
            src="/rectangle-4@2x.png"
          />
          <img
            className={styles.frameInner}
            loading="eager"
            alt=""
            src="/rectangle-5@2x.png"
          />
          <img
            className={styles.rectangleIcon}
            loading="eager"
            alt=""
            src="/rectangle-18@2x.png"
          />
          <img
            className={styles.frameChild1}
            loading="eager"
            alt=""
            src="/rectangle-7@2x.png"
          />
          <img
            className={styles.frameChild2}
            loading="eager"
            alt=""
            src="/rectangle-19@2x.png"
          />
        </div>
      </div>
      <div className={styles.heading2OurCompanyGrowth}>
        <div className={styles.heading21}>View more</div>
      </div>
    </div>
  );
};

export default FrameComponent;
