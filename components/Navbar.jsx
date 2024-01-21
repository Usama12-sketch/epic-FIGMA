
import styles from "./NAvbar.module.css";
import Link from "next/link";

const Navbar = () => {
  

  return (<div className={styles.navbar}>
   
   <div className={styles.nav}>

    
        <div className={styles.iconBox}>
          <img
            className={styles.icon}
            loading="eager"
            alt=""
            src="/ellipse-1@2x.png"
            />
          <b className={styles.epicInternationalAnd}>
            Epic International and Co.
          </b>
        </div>


        <nav className={styles.menu}>
          <div>

            <Link href="/" className={styles.home}>HOME</Link>
          </div>
          
          <div>

            <Link href="/ABOUT" className={styles.home}>
              ABOUT US
            </Link>
          </div>
          
<div>

          <Link href="/AboutUs" className={styles.home}>
            OUR SERVICES
          </Link>
</div>
  <div>

          <Link href="AboutUs" className={styles.home} >
            OUR COURCES
          </Link>
  </div>
        </nav>
      {/* </div> */}
      </div>

            </div>

  );
};

export default Navbar;
