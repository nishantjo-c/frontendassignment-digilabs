import page2scss from "./Page2.module.scss";
import photo2 from "../../../public/photo2.svg";
import topicon from "../../../public/topicon.svg";
import middleicon from "../../../public/middleicon.svg";
import bottomicon from "../../../public/bottomicon.svg";
import Quote from "./Quote";

export default function Page2() {
  return (
    <>
      <div className={page2scss.container}>
        <div className={page2scss.container__center}>
          <div className={page2scss.container__center_image}>
            <img
              src={photo2}
              alt="photo"
              className={page2scss.container__center_image_img}
            />
          </div>
          <div className={page2scss.container__center_content}>
            {/* cards */}
            <div className={page2scss.container__center_content_card}>
              <img src={topicon} alt="icon" className={page2scss.icon} />
              <h2 className={page2scss.cardtitle}>Explore ideas together</h2>
              <p className={page2scss.cardsubtitle}>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
              <button className={page2scss.btn}>Learn more &#x2192;</button>
            </div>
            <div className={page2scss.container__center_content_card}>
              <img src={middleicon} alt="icon" className={page2scss.icon} />
              <h2 className={page2scss.cardtitle}>Bring those ideas to life</h2>
              <p className={page2scss.cardsubtitle}>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
              <button className={page2scss.btn}>Learn more &#x2192;</button>
            </div>
            <div className={page2scss.container__center_content_card}>
              <img src={bottomicon} alt="icon" className={page2scss.icon} />
              <h2 className={page2scss.cardtitle}>Ship better outcomes</h2>
              <p className={page2scss.cardsubtitle}>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
              <button className={page2scss.btn}>Learn more &#x2192;</button>
            </div>
          </div>
        </div>
      </div>
      <Quote />
    </>
  );
}
