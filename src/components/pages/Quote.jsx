import quoteSCSS from "./Quote.module.scss";

// icons
import logodark from "../../assets/companylogodark.svg";
import ceoimage from "../../assets/ceoimage.svg";
import Blogs from "./Blogs";

export default function Quote() {
  return (
    <>
      <div className={quoteSCSS.container}>
        <div className={quoteSCSS.container__logo}>
          <img
            src={logodark}
            alt="logo"
            className={quoteSCSS.container__logo_icon}
          />
        </div>
        {/* <div className={quoteSCSS.container__quote}> */}
        <h2 className={quoteSCSS.container__quote}>
          Thank you for making it painless, pleasant and most of all hassle
          free! I love LookScout. I can't say enough about LookScout. Great job,
          I will definitely be ordering again!
        </h2>
        {/* </div> */}
        <div className={quoteSCSS.container__info}>
          <div className={quoteSCSS.container__info_image}>
            <img src={ceoimage} alt="photo" />
          </div>
          <div className={quoteSCSS.container__info_about}>
            <h2 className={quoteSCSS.container__info_about_name}>Lisa Smith</h2>
            <p className={quoteSCSS.container__info_about_designation}>
              CEO Company
            </p>
          </div>
        </div>
      </div>
      <Blogs />
    </>
  );
}
