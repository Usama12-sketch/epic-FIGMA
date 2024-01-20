import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./AboutUs.module.css";

const AboutUs: NextPage = () => {
  const router = useRouter();

  const onLearnMoreTextClick = useCallback(() => {
    router.push("/AMAZON");
  }, [router]);

  const onLearnMoreText1Click = useCallback(() => {
    router.push("/GRAPHICDESIGNING");
  }, [router]);

  const onAddressAndGetInTouch8Click = useCallback(() => {
    router.push("/UIUX");
  }, [router]);

  const onLearnMoreText3Click = useCallback(() => {
    router.push("/IELTS");
  }, [router]);

  const onAddressAndGetInTouch14Click = useCallback(() => {
    router.push("/SHOPIFY");
  }, [router]);

  const onAddressAndGetInTouch17Click = useCallback(() => {
    router.push("/DIGITALMARKETING");
  }, [router]);

  const onAddressAndGetInTouch20Click = useCallback(() => {
    router.push("/AFFILIATE");
  }, [router]);

  const onLearnMoreText7Click = useCallback(() => {
    router.push("/ENGLISH");
  }, [router]);

  const onAddressAndGetInTouch26Click = useCallback(() => {
    router.push("/WEBDEVELOPMENT");
  }, [router]);

  const onAddressAndGetInTouch29Click = useCallback(() => {
    router.push("/APPDEVELOPMENT");
  }, [router]);

  const onAddressAndGetInTouch32Click = useCallback(() => {
    router.push("/QURAN");
  }, [router]);

  const onAddressAndGetInTouch35Click = useCallback(() => {
    router.push("/ACCOUNTMANAGMENT");
  }, [router]);

  const onAddressAndGetInTouch38Click = useCallback(() => {
    router.push("/HR");
  }, [router]);

  const onAddressAndGetInTouch46Click = useCallback(() => {
    router.push("/SEO");
  }, [router]);

  const onAddressAndGetInTouch49Click = useCallback(() => {
    router.push("/TRADING");
  }, [router]);

  const onHOMETextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs1}>
        <div className={styles.aboutUs2}>About us</div>
      </div>
      <header className={styles.aboutUsContainer} />
      <main className={styles.contactInfo}>
        <h1 className={styles.weOffer}>WE OFFER</h1>
        <h3 className={styles.heading3}>ADDRESS</h3>
        <img
          className={styles.socialMediaIcons}
          loading="eager"
          alt=""
          src="/ellipse-5@2x.png"
        />
        <b className={styles.epicInternationalAnd}>
          Epic International and Co.
        </b>
        <div className={styles.stFloorMakkah}>
          1st floor Makkah Market Opposite kunj ground near sarban chowk
          Abbottabad
        </div>
        <h3 className={styles.heading31}>GET IN TOUCH</h3>
        <div className={styles.inputEmailField}>+ 92 347-1892960</div>
        <div className={styles.divinputGroup}>
          <div className={styles.input}>
            <div className={styles.divplaceholder}>
              <div className={styles.enterYourEmail}>Enter your email</div>
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.send}>Send</div>
          </div>
        </div>
        <div className={styles.addressAndGetInTouch} />
        <h3 className={styles.amazon}>Amazon</h3>
        <div className={styles.amazonIsA}>
          Amazon is a multinational technology and e-commerce giant that offers
          a diverse range of products, services, and platforms, dominating
          online retail and various industrie
        </div>
        <img
          className={styles.addressAndGetInTouch1}
          alt=""
          src="/address-and-get-in-touch@2x.png"
        />
        <img
          className={styles.bookmarkIcon}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet}>3.6</div>
        <img
          className={styles.starIcon}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div className={styles.addressAndGetInTouch2} />
        <div className={styles.learnMore} onClick={onLearnMoreTextClick}>
          Learn more
        </div>
        <div className={styles.addressAndGetInTouch3} />
        <h3 className={styles.graphicDesigning}>Graphic Designing</h3>
        <div className={styles.graphicDesigningIs}>
          Graphic designing is the creative process of visually communicating
          ideas and information through the use of graphic elements such as
          images, typography, and color.
        </div>
        <img
          className={styles.addressAndGetInTouch4}
          alt=""
          src="/rectangle-43-1@2x.png"
        />
        <img
          className={styles.bookmarkIcon1}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet1}>3.6</div>
        <img
          className={styles.starIcon1}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div className={styles.addressAndGetInTouch5} />
        <div className={styles.learnMore1} onClick={onLearnMoreText1Click}>
          Learn more
        </div>
        <div className={styles.addressAndGetInTouch6} />
        <h3 className={styles.uiuxDesigning}>UI/UX Designing</h3>
        <div className={styles.uiuxDesignIs}>
          UI/UX design is the art and science of creating visually appealing and
          user-friendly digital interfaces that enhance the overall user
          experience.
        </div>
        <img
          className={styles.addressAndGetInTouch7}
          alt=""
          src="/rectangle-43-2@2x.png"
        />
        <img
          className={styles.bookmarkIcon2}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet2}>3.6</div>
        <img
          className={styles.starIcon2}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div
          className={styles.addressAndGetInTouch8}
          onClick={onAddressAndGetInTouch8Click}
        />
        <div className={styles.learnMore2}>Learn more</div>
        <div className={styles.addressAndGetInTouch9} />
        <h3 className={styles.ielts}>{`IELTS `}</h3>
        <div className={styles.ieltsInternationalEnglishContainer}>
          <p className={styles.ieltsInternationalEnglish}>
            IELTS (International English Language Testing System) is a globally
            recognized language proficiency test assessing English skills for
            academic and immigration purposes.
          </p>
        </div>
        <img
          className={styles.addressAndGetInTouch10}
          alt=""
          src="/rectangle-43-3@2x.png"
        />
        <img
          className={styles.bookmarkIcon3}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet3}>3.6</div>
        <img
          className={styles.starIcon3}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div className={styles.addressAndGetInTouch11} />
        <div className={styles.learnMore3} onClick={onLearnMoreText3Click}>
          Learn more
        </div>
        <div className={styles.addressAndGetInTouch12} />
        <h3 className={styles.shopify}>Shopify</h3>
        <div className={styles.shopifyIsAContainer}>
          <p className={styles.shopifyIsA}>
            Shopify is a leading e-commerce platform that enables businesses to
            create and manage online stores with ease.
          </p>
        </div>
        <img
          className={styles.addressAndGetInTouch13}
          alt=""
          src="/rectangle-43-4@2x.png"
        />
        <img
          className={styles.bookmarkIcon4}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet4}>3.6</div>
        <img
          className={styles.starIcon4}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div
          className={styles.addressAndGetInTouch14}
          onClick={onAddressAndGetInTouch14Click}
        />
        <div className={styles.learnMore4}>Learn more</div>
        <div className={styles.addressAndGetInTouch15} />
        <h3 className={styles.digitalMarketing}>Digital Marketing</h3>
        <div className={styles.digitalMarketingIs}>
          Digital marketing is the strategic use of online channels and
          technologies to promote products, services, or brands, reaching and
          engaging with a target audience.
        </div>
        <img
          className={styles.addressAndGetInTouch16}
          alt=""
          src="/rectangle-43-5@2x.png"
        />
        <img
          className={styles.bookmarkIcon5}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet5}>3.6</div>
        <img
          className={styles.starIcon5}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div
          className={styles.addressAndGetInTouch17}
          onClick={onAddressAndGetInTouch17Click}
        />
        <div className={styles.learnMore5}>Learn more</div>
        <div className={styles.addressAndGetInTouch18} />
        <h3 className={styles.affiliateMarketing}>Affiliate Marketing</h3>
        <div className={styles.affiliateMarketingIs}>
          Affiliate marketing is a performance-based online marketing strategy
          where individuals or businesses earn commissions for promoting
          products or services and driving traffic or sales to a merchant's
          site.
        </div>
        <img
          className={styles.addressAndGetInTouch19}
          alt=""
          src="/rectangle-43-6@2x.png"
        />
        <img
          className={styles.bookmarkIcon6}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet6}>3.6</div>
        <img
          className={styles.starIcon6}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div
          className={styles.addressAndGetInTouch20}
          onClick={onAddressAndGetInTouch20Click}
        />
        <div className={styles.learnMore6}>Learn more</div>
        <div className={styles.addressAndGetInTouch21} />
        <h3 className={styles.englishLanguage}>English Language</h3>
        <div className={styles.englishIsA}>
          English is a widely spoken global language, known for its versatility
          and importance in international communication, business, and cultural
          exchange.
        </div>
        <img
          className={styles.addressAndGetInTouch22}
          alt=""
          src="/rectangle-43-7@2x.png"
        />
        <img
          className={styles.bookmarkIcon7}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet7}>3.6</div>
        <img
          className={styles.starIcon7}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div className={styles.addressAndGetInTouch23} />
        <div className={styles.learnMore7} onClick={onLearnMoreText7Click}>
          Learn more
        </div>
        <div className={styles.addressAndGetInTouch24} />
        <h3 className={styles.webDevelopment}>Web Development</h3>
        <div className={styles.webDevelopmentInvolves}>
          Web development involves designing and building websites or web
          applications for online functionality and user interaction.
        </div>
        <img
          className={styles.addressAndGetInTouch25}
          alt=""
          src="/rectangle-43-8@2x.png"
        />
        <img
          className={styles.bookmarkIcon8}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet8}>3.6</div>
        <img
          className={styles.starIcon8}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div
          className={styles.addressAndGetInTouch26}
          onClick={onAddressAndGetInTouch26Click}
        />
        <div className={styles.learnMore8}>Learn more</div>
        <div className={styles.addressAndGetInTouch27} />
        <h3 className={styles.appDevelopment}>App Development</h3>
        <div className={styles.appDevelopmentIsContainer}>
          <p className={styles.appDevelopmentIs}>
            App development is the process of creating software applications for
            mobile devices or other digital platforms to meet specific user
            needs or solve particular problems.
          </p>
        </div>
        <img
          className={styles.addressAndGetInTouch28}
          alt=""
          src="/rectangle-43-9@2x.png"
        />
        <img
          className={styles.bookmarkIcon9}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet9}>3.6</div>
        <img
          className={styles.starIcon9}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div
          className={styles.addressAndGetInTouch29}
          onClick={onAddressAndGetInTouch29Click}
        />
        <div className={styles.learnMore9}>Learn more</div>
        <div className={styles.addressAndGetInTouch30} />
        <h3 className={styles.onlineQuranLearning}>Online Quran Learning</h3>
        <div className={styles.onlineQuranLearning1}>
          Online Quran learning involves remote education through digital
          platforms, enabling individuals to study and recite the Quran under
          the guidance of qualified instructors.
        </div>
        <img
          className={styles.addressAndGetInTouch31}
          alt=""
          src="/rectangle-43-10@2x.png"
        />
        <img
          className={styles.bookmarkIcon10}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet10}>3.6</div>
        <img className={styles.starIcon10} alt="" src="/star@2x.png" />
        <div
          className={styles.addressAndGetInTouch32}
          onClick={onAddressAndGetInTouch32Click}
        />
        <div className={styles.learnMore10}>Learn more</div>
        <div className={styles.addressAndGetInTouch33} />
        <h3 className={styles.accountManagement}>Account Management</h3>
        <div className={styles.accountManagementInvolves}>
          Account management involves building and maintaining relationships
          with clients, overseeing their needs, and ensuring satisfaction to
          achieve business growth and retention.
        </div>
        <img
          className={styles.addressAndGetInTouch34}
          alt=""
          src="/rectangle-43-11@2x.png"
        />
        <img
          className={styles.bookmarkIcon11}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet11}>3.6</div>
        <img className={styles.starIcon11} alt="" src="/star@2x.png" />
        <div
          className={styles.addressAndGetInTouch35}
          onClick={onAddressAndGetInTouch35Click}
        />
        <div className={styles.learnMore11}>Learn more</div>
        <div className={styles.addressAndGetInTouch36} />
        <h3 className={styles.hrHumanResources}>{`HR (Human Resources) `}</h3>
        <div className={styles.humanResourcesHrContainer}>
          <p className={styles.humanResourcesHr}>
            Human Resources (HR) is responsible for managing personnel,
            fostering a positive workplace culture, and implementing policies to
            support the overall well-being and effectiveness of an
            organization's workforce.
          </p>
        </div>
        <img
          className={styles.addressAndGetInTouch37}
          alt=""
          src="/rectangle-43-12@2x.png"
        />
        <img
          className={styles.bookmarkIcon12}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet12}>3.6</div>
        <img
          className={styles.starIcon12}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div
          className={styles.addressAndGetInTouch38}
          onClick={onAddressAndGetInTouch38Click}
        />
        <div className={styles.learnMore12}>Learn more</div>
        <div className={styles.addressAndGetInTouch39} />
        <h3 className={styles.videoEditing}>Video Editing</h3>
        <div className={styles.videoEditingIs}>
          Video editing is the creative process of manipulating and arranging
          video footage, audio, and visual elements to craft a cohesive and
          engaging final product.
        </div>
        <img
          className={styles.addressAndGetInTouch40}
          alt=""
          src="/rectangle-43-13@2x.png"
        />
        <img
          className={styles.bookmarkIcon13}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet13}>3.6</div>
        <img
          className={styles.starIcon13}
          loading="eager"
          alt=""
          src="/star@2x.png"
        />
        <div className={styles.learnMore13}>Learn more</div>
        <div className={styles.addressAndGetInTouch41} />
        <h3 className={styles.contentWriting}>Content Writing</h3>
        <div className={styles.contentWritingInvolvesContainer}>
          <p className={styles.contentWritingInvolves}>
            Content writing involves creating written material for various
            platforms to inform, entertain, or persuade audiences while adhering
            to specific goals and guidelines.
          </p>
        </div>
        <img
          className={styles.addressAndGetInTouch42}
          alt=""
          src="/rectangle-43-14@2x.png"
        />
        <img
          className={styles.bookmarkIcon14}
          loading="eager"
          alt=""
          src="/bookmark@2x.png"
        />
        <div className={styles.addressAndGet14}>3.6</div>
        <img className={styles.starIcon14} alt="" src="/star@2x.png" />
        <div className={styles.addressAndGetInTouch43} />
        <div className={styles.learnMore14}>Learn more</div>
        <div className={styles.addressAndGetInTouch44} />
        <h3 className={styles.seo}>SEO</h3>
        <div className={styles.seoSearchEngine}>
          SEO (Search Engine Optimization) is the practice of optimizing online
          content to improve its visibility on search engine results pages and
          increase organic traffic.
        </div>
        <img
          className={styles.addressAndGetInTouch45}
          alt=""
          src="/rectangle-43-15@2x.png"
        />
        <img className={styles.bookmarkIcon15} alt="" src="/bookmark@2x.png" />
        <div className={styles.addressAndGet15}>3.6</div>
        <img className={styles.starIcon15} alt="" src="/star@2x.png" />
        <div
          className={styles.addressAndGetInTouch46}
          onClick={onAddressAndGetInTouch46Click}
        />
        <div className={styles.learnMore15}>Learn more</div>
        <div className={styles.addressAndGetInTouch47} />
        <h3 className={styles.trading}>Trading</h3>
        <div className={styles.tradingInvolvesBuying}>
          Trading involves buying and selling financial instruments in markets
          to capitalize on price fluctuations and generate profits.
        </div>
        <img
          className={styles.addressAndGetInTouch48}
          alt=""
          src="/rectangle-43-16@2x.png"
        />
        <img className={styles.bookmarkIcon16} alt="" src="/bookmark@2x.png" />
        <div className={styles.addressAndGet16}>3.6</div>
        <img className={styles.starIcon16} alt="" src="/star@2x.png" />
        <div
          className={styles.addressAndGetInTouch49}
          onClick={onAddressAndGetInTouch49Click}
        />
        <div className={styles.learnMore16}>Learn more</div>
      </main>
      <h1 className={styles.ourCources}>OUR COURCES</h1>
      <footer className={styles.aboutUsContainer1} />
      <div className={styles.home} onClick={onHOMETextClick}>
        HOME
      </div>
      <div className={styles.aboutUs3}>ABOUT US</div>
      <div className={styles.ourServices}>OUR SERVICES</div>
      <div className={styles.ourCources1}>OUR COURCES</div>
      <div className={styles.facebookParent}>
        <img
          className={styles.facebookIcon}
          loading="eager"
          alt=""
          src="/facebook@2x.png"
        />
        <img
          className={styles.instagramIcon}
          loading="eager"
          alt=""
          src="/instagram@2x.png"
        />
        <img
          className={styles.tiktokIcon}
          loading="eager"
          alt=""
          src="/tiktok@2x.png"
        />
        <img
          className={styles.whatsappIcon}
          loading="eager"
          alt=""
          src="/whatsapp@2x.png"
        />
      </div>
    </div>
  );
};

export default AboutUs;
