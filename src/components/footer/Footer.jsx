import footerSCSS from "./Footer.module.scss";

// icons
import checkbox from "../../assets/checkbox.svg";
import companylogo from "../../assets/CompanyLogo.svg";
import facebook from "../../assets/facebook.svg";
import googlewhite from "../../assets/googlewhite.svg";
import apple from "../../assets/apple.svg";
import instagram from "../../assets/instagram.svg";

export default function Footer() {
  return (
    <>
      <div className={footerSCSS.top}>
        {/* header */}
        <div className={footerSCSS.top__header}>
          <p className={footerSCSS.top__header_subtitle}>1% OF THE INDUSTRY</p>
          <h2 className={footerSCSS.top__header_title}>
            Welcome to your new digital reality that will rock your world truly
            at all throughout.
          </h2>
        </div>
        <div className={footerSCSS.top__input}>
          <input
            type="text"
            placeholder="Enter your email"
            className={footerSCSS.top__input_email}
          />
          <button className={footerSCSS.top__input_button}>Submit</button>
        </div>
        {/* features */}
        <div className={footerSCSS.top__features}>
          <div className={footerSCSS.top__features_icon}>
            <img
              src={checkbox}
              alt=""
              className={footerSCSS.top__features_icon_img}
            />
            <p className={footerSCSS.top__features_icon_text}>Full Secure</p>
          </div>
          <div className={footerSCSS.top__features_icon}>
            <img
              src={checkbox}
              alt=""
              className={footerSCSS.top__features_icon_img}
            />
            <p className={footerSCSS.top__features_icon_text}>24/7 Support</p>
          </div>
          <div className={footerSCSS.top__features_icon}>
            <img
              src={checkbox}
              alt=""
              className={footerSCSS.top__features_icon_img}
            />
            <p className={footerSCSS.top__features_icon_text}>Done Deal</p>
          </div>
        </div>
      </div>

      {/* bottom one */}
      <div className={footerSCSS.bottom}>
        <div className={footerSCSS.bottom__columns}>
          {/* col1 */}
          <div className={footerSCSS.bottom__columns_col}>
            <img
              src={companylogo}
              alt="logo"
              className={footerSCSS.bottom__columns_col_logo}
            />
            <p className={footerSCSS.bottom__columns_col_text1}>
              Generate outside the box thinking with the possibility to target
              the low.
            </p>
          </div>
          {/* col2 */}
          <div
            className={`${footerSCSS.bottom__columns_col} ${footerSCSS.bottom__columns_mid}`}
          >
            {/* <div className={footerSCSS.bottom__columns_col_mid}> */}
            <p className={footerSCSS.bottom__columns_col_title}>Resources</p>
            <p className={footerSCSS.bottom__columns_col_text}>Community</p>
            <p className={footerSCSS.bottom__columns_col_text}>Events</p>
            <p className={footerSCSS.bottom__columns_col_text}>Help Center</p>
            <p className={footerSCSS.bottom__columns_col_text}>Partners</p>
            {/* </div> */}
          </div>
          {/* col3 */}
          <div
            className={`${footerSCSS.bottom__columns_col} ${footerSCSS.bottom__columns_mid}`}
          >
            {/* <div className={footerSCSS.bottom__columns_col_mid}> */}
            <p className={footerSCSS.bottom__columns_col_title}>Products</p>
            <p className={footerSCSS.bottom__columns_col_text}>Integrations</p>
            <p className={footerSCSS.bottom__columns_col_text}>Solutions</p>
            <p className={footerSCSS.bottom__columns_col_text}>Features</p>
            <p className={footerSCSS.bottom__columns_col_text}>Enterprise</p>
            {/* </div> */}
          </div>
          {/* col4 */}
          {/* <div className={footerSCSS.bottom__columns_col}> */}
          <div
            className={`${footerSCSS.bottom__columns_col} ${footerSCSS.bottom__columns_col3}`}
          >
            <p className={footerSCSS.bottom__columns_col_title}>
              Get Email Notifications
            </p>
            <p className={footerSCSS.bottom__columns_col_text1}>
              Generate outside the box thinking with the possibility to targtet
              the low
            </p>
            <div className={footerSCSS.bottom__columns_col_input}>
              <input
                type="text"
                className={footerSCSS.bottom__columns_col_input_area}
              />
              <button className={footerSCSS.bottom__columns_col_input_btn}>
                Submit
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className={footerSCSS.bottom__copyright}>
          <p className={footerSCSS.bottom__copyright_text}>
            © 2023 Lookscout. All Rights Reserved.
          </p>
          <div className={footerSCSS.bottom__copyright_icons}>
            <img
              src={facebook}
              alt=""
              className={footerSCSS.bottom__copyright_icons_icon}
            />
            <img
              src={googlewhite}
              alt=""
              className={footerSCSS.bottom__copyright_icons_icon}
            />
            <img
              src={apple}
              alt=""
              className={footerSCSS.bottom__copyright_icons_icon}
            />
            <img
              src={instagram}
              alt=""
              className={footerSCSS.bottom__copyright_icons_icon}
            />
          </div>
        </div>
      </div>
    </>
  );
}
