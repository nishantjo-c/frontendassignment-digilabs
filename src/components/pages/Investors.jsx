import investorsSCSS from "./Investors.module.scss";

// icons
import theverge from "../../../public/theverge.svg";
import slack from "../../../public/slack.svg";
import google from "../../../public/google.svg";
import paypal from "../../../public/paypal.svg";
import pinterst from "../../../public/pinterest.svg";
import mallchimp from "../../../public/mallchimp.svg";
import Footer from "../footer/Footer";

export default function Investors() {
  return (
    <>
      <div className={investorsSCSS.container}>
        {/* <div className={investorsSCSS.container__title}> */}
        <h2 className={investorsSCSS.container__title}>Proud to Be Used By</h2>
        {/* </div> */}
        {/* <div className={investorsSCSS.container__quote}> */}
        <h2 className={investorsSCSS.container__subtitle}>
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </h2>
        {/* </div> */}
        <div className={investorsSCSS.container__info}>
          <img
            src={theverge}
            alt="logo1"
            className={investorsSCSS.container__info_icon}
          />
          <img
            src={slack}
            alt="logo2"
            className={investorsSCSS.container__info_icon}
          />
          <img
            src={google}
            alt="logo3"
            className={investorsSCSS.container__info_icon}
          />
          <img
            src={paypal}
            alt="logo4"
            className={investorsSCSS.container__info_icon}
          />
          <img
            src={pinterst}
            alt="logo5"
            className={`${investorsSCSS.container__info_icon} ${investorsSCSS.icondirection}`}
          />
          <img
            src={mallchimp}
            alt="logo6"
            className={`${investorsSCSS.container__info_icon} ${investorsSCSS.icondirection1}`}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
