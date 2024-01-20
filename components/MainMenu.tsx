import type { NextPage } from "next";
import styles from "./MainMenu.module.css";

const MainMenu: NextPage = () => {
  return (
    <header className={styles.mainMenu}>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUs1}>About us</div>
      </div>
      <input className={styles.textFrame} type="text" />
      <div className={styles.home}>HOME</div>
      <div className={styles.aboutUs2}>ABOUT US</div>
      <div className={styles.ourServices}>OUR SERVICES</div>
      <div className={styles.ourCources}>OUR COURCES</div>
    </header>
  );
};

export default MainMenu;
