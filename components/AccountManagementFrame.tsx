import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./AccountManagementFrame.module.css";

type AccountManagementFrameType = {
  /** Style props */
  emptyFramePadding?: CSSProperties["padding"];
};

const AccountManagementFrame: NextPage<AccountManagementFrameType> = ({
  emptyFramePadding,
}) => {
  const accountManagementFrameStyle: CSSProperties = useMemo(() => {
    return {
      padding: emptyFramePadding,
    };
  }, [emptyFramePadding]);

  return (
    <header
      className={styles.accountManagementFrame}
      style={accountManagementFrameStyle}
    >
      <div className={styles.accountManagementFrameChild} />
      <div className={styles.emptyFrame}>
        <div className={styles.home}>HOME</div>
      </div>
      <div className={styles.emptyFrame1}>
        <div className={styles.aboutUs}>ABOUT US</div>
      </div>
      <div className={styles.ourServices}>OUR SERVICES</div>
      <div className={styles.ourCources}>OUR COURCES</div>
    </header>
  );
};

export default AccountManagementFrame;
