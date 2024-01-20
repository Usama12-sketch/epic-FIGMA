import type { NextPage } from "next";
import styles from "./FacebookInstagramTwitterWha.module.css";

const FacebookInstagramTwitterWha: NextPage = () => {
  return (
    <section className={styles.facebookInstagramTwitterWha}>
      <div className={styles.facebookFrame}>
        <div className={styles.instagramFrame}>
          <div className={styles.nowIfYou}>
            Now, if you want to earn money through UI/UX design, here are some
            ways to do so:
          </div>
        </div>
        <div className={styles.whatsAppFrame}>
          <div className={styles.socialMediaFrames}>
            <div className={styles.freelancing}>Freelancing:</div>
            <div className={styles.manyBusinessesAnd}>
              Many businesses and startups look for freelance UI/UX designers
              for specific projects. You can join freelance platforms like
              Upwork, Fiverr, or Toptal to find clients and offer your services.
            </div>
          </div>
          <div className={styles.fullTimeEmploymentWrapper}>
            <div className={styles.fullTimeEmployment}>
              Full-Time Employment:
            </div>
          </div>
          <div className={styles.manyCompaniesHire}>
            Many companies hire UI/UX designers as part of their in-house teams.
            Look for job opportunities on job boards, company websites, or
            through professional networking.
          </div>
          <div className={styles.freelanceUIUX}>
            <div className={styles.sellResources}>
              <div className={styles.createAndSell}>
                Create and Sell UI/UX Resources:
              </div>
            </div>
            <div className={styles.designAssets}>
              <div className={styles.ifYouHave}>
                If you have a knack for creating design assets, such as
                templates, icons, or wireframes, you can sell them on platforms
                like Envato Market or through your own website.
              </div>
            </div>
            <div className={styles.yourAgency}>
              <div className={styles.startYourDesign}>
                Start Your Design Agency:
              </div>
            </div>
            <div className={styles.ifYouHave1}>
              If you have enough experience and a solid client base, you can
              consider starting your own UI/UX design agency. This involves
              managing a team of designers and taking on larger projects.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookInstagramTwitterWha;
