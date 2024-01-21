import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer
