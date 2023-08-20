import featuresSCSS from "./Features.module.scss";

// icons
import card1icon from "../../assets/card1icon.svg";
import card2icon from "../../assets/card2icon.svg";
import card3icon from "../../assets/card3icon.svg";
import card4icon from "../../assets/card4icon.svg";
import card5icon from "../../assets/card5icon.svg";
import card6icon from "../../assets/card6icon.svg";

export default function Features() {
  return (
    <div className={featuresSCSS.container}>
      <div className={featuresSCSS.container__header}>
        <h2 className={featuresSCSS.container__header_title}>
          Messaging for all
        </h2>
        <p className={featuresSCSS.container__header_subtitle}>
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </div>
      <div className={featuresSCSS.container__body}>
        {/* row 1 */}
        <div className={featuresSCSS.container__body_content}>
          {/* card 1 */}
          <div className={featuresSCSS.container__body_content_card}>
            <img src={card1icon} alt="icon" className={featuresSCSS.icon} />
            <h2 className={featuresSCSS.cardtitle}>Easier Work Organization</h2>
            <p className={featuresSCSS.cardsubtitle}>
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.
            </p>
            <button className={featuresSCSS.btn}>Learn more &#x2192;</button>
          </div>
          <div className={featuresSCSS.container__body_content_card}>
            <img src={card2icon} alt="icon" className={featuresSCSS.icon} />
            <h2 className={featuresSCSS.cardtitle}>Easier Work Organization</h2>
            <p className={featuresSCSS.cardsubtitle}>
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.
            </p>
            <button className={featuresSCSS.btn}>Learn more &#x2192;</button>
          </div>
          <div className={featuresSCSS.container__body_content_card}>
            <img src={card3icon} alt="icon" className={featuresSCSS.icon} />
            <h2 className={featuresSCSS.cardtitle}>Easier Work Organization</h2>
            <p className={featuresSCSS.cardsubtitle}>
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.
            </p>
            <button className={featuresSCSS.btn}>Learn more &#x2192;</button>
          </div>
        </div>
        {/* row 2 */}
        <div className={featuresSCSS.container__body_content}>
          {/* card 1 */}
          <div className={featuresSCSS.container__body_content_card}>
            <img src={card4icon} alt="icon" className={featuresSCSS.icon} />
            <h2 className={featuresSCSS.cardtitle}>Easier Work Organization</h2>
            <p className={featuresSCSS.cardsubtitle}>
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.
            </p>
            <button className={featuresSCSS.btn}>Learn more &#x2192;</button>
          </div>
          <div className={featuresSCSS.container__body_content_card}>
            <img src={card5icon} alt="icon" className={featuresSCSS.icon} />
            <h2 className={featuresSCSS.cardtitle}>Easier Work Organization</h2>
            <p className={featuresSCSS.cardsubtitle}>
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.
            </p>
            <button className={featuresSCSS.btn}>Learn more &#x2192;</button>
          </div>
          <div className={featuresSCSS.container__body_content_card}>
            <img src={card6icon} alt="icon" className={featuresSCSS.icon} />
            <h2 className={featuresSCSS.cardtitle}>Easier Work Organization</h2>
            <p className={featuresSCSS.cardsubtitle}>
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.
            </p>
            <button className={featuresSCSS.btn}>Learn more &#x2192;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
