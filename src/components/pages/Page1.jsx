import page1scss from "./Page1.module.scss";
import topicon from "../../../public/topicon.svg";
import middleicon from "../../../public/middleicon.svg";
import bottomicon from "../../../public/bottomicon.svg";
import dikkat from "../../../public/dikkat.svg";
import Page2 from "./Page2";

export default function Page1() {
  return (
    <>
      <div className={page1scss.container}>
        <div className={page1scss.container__header}>
          <h2 className={page1scss.container__header_title}>
            Redefining Product Features
          </h2>
          <p className={page1scss.container__header_subtitle}>
            Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence on cross-platform
            integration.
          </p>
        </div>
        <div className={page1scss.container__body}>
          <div className={page1scss.container__body_left}>
            <div className={page1scss.container__body_left_content}>
              {/* card 1 */}
              <div className={page1scss.container__body_left_content_card}>
                <img src={topicon} alt="icon" className={page1scss.icon} />
                <h2 className={page1scss.cardtitle}>Explore ideas together</h2>
                <p className={page1scss.cardsubtitle}>
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
                <button className={page1scss.btn}>Learn more &#x2192;</button>
              </div>
              <div className={page1scss.container__body_left_content_card}>
                <img src={middleicon} alt="icon" className={page1scss.icon} />
                <h2 className={page1scss.cardtitle}>
                  Bring those ideas to life
                </h2>
                <p className={page1scss.cardsubtitle}>
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
                <button className={page1scss.btn}>Learn more &#x2192;</button>
              </div>
              <div className={page1scss.container__body_left_content_card}>
                <img src={bottomicon} alt="icon" className={page1scss.icon} />
                <h2 className={page1scss.cardtitle}>Ship better outcomes</h2>
                <p className={page1scss.cardsubtitle}>
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
                <button className={page1scss.btn}>Learn more &#x2192;</button>
              </div>
            </div>
          </div>
          <div className={page1scss.container__body_right}>
            <img
              src={dikkat}
              alt="photo"
              className={page1scss.container__body_right_img}
            />
          </div>
        </div>
      </div>
      <Page2 />
    </>
  );
}
