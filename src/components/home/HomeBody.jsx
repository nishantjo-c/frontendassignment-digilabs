import gitlabicon from "../../assets/gitlab.svg";
import slackicon from "../../assets/slack.svg";
import netflixicon from "../../assets/netflix.svg";
import paypalicon from "../../assets/paypal.svg";

// right side icons
import circleicon from "../../assets/circle.svg";
import circle2icon from "../../assets/circle2.svg";
import twotriangleicon from "../../assets/twotriangles.svg";
// middle icons
import shape1 from "../../assets/shape1.svg";
import image from "../../assets/image.svg";
import shape2 from "../../assets/shape2.svg";
import shape3 from "../../assets/shape3.svg";
// right icons
import righttop from "../../assets/righttop.svg";
import rightmiddle from "../../assets/rightmiddle.svg";
import rightbottom from "../../assets/rightbottom.svg";

import homebodySCSS from "./HomeBody.module.scss";

export default function HomeBody() {
  return (
    <div className={homebodySCSS.body}>
      {/* left section */}
      <div className={homebodySCSS.body__about}>
        <div className={homebodySCSS.body__about_content}>
          <h2 className={homebodySCSS.body__about_content_title}>
            Your Supercharged Design Workflow.
          </h2>
          <p className={homebodySCSS.body__about_content_subtitle}>
            We’ve been told it is not possible to overachieve our customers’
            expectations. We have not reinvented the wheel, we decided to build
            upon it.
          </p>
          <button className={homebodySCSS.body__about_content_btn}>
            Get Started
          </button>
          <div className={homebodySCSS.body__about_content_footer}>
            <p className={homebodySCSS.text}>Who supports us</p>
            <div className={homebodySCSS.body__about_content_footer_icons}>
              <img
                src={gitlabicon}
                alt="gitlab"
                className={homebodySCSS.icon}
              />
              <img src={slackicon} alt="slack" className={homebodySCSS.icon} />
              <img
                src={netflixicon}
                alt="netflix"
                className={homebodySCSS.icon}
              />
              <img
                src={paypalicon}
                alt="paypal"
                className={homebodySCSS.icon}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className={homebodySCSS.body__design}>
        {/* this div is just for the different backgroud color in right */}
        <div className={homebodySCSS.background}></div>
        <div className={homebodySCSS.body__design_container}>
          {/* left */}
          <div className={homebodySCSS.body__design_container_left}>
            <div className={homebodySCSS.lefticons}>
              <img src={circleicon} alt="circle" className={homebodySCSS.svg} />
            </div>
            <div className={homebodySCSS.lefticons}>
              <img
                src={twotriangleicon}
                alt="icon"
                className={homebodySCSS.svg}
              />
            </div>
            <div className={homebodySCSS.lefticons}>
              <img src={circle2icon} alt="icon" className={homebodySCSS.svg} />
            </div>
          </div>
          {/* middle */}
          <div className={homebodySCSS.body__design_container_middle}>
            <div className={homebodySCSS.middleicons}>
              <img src={shape1} alt="circle" className={homebodySCSS.svg} />
            </div>
            <div className={homebodySCSS.middleicons}>
              <img src={image} alt="icon" className={homebodySCSS.svg} />
            </div>
            <div className={homebodySCSS.middleicons}>
              <img src={shape2} alt="icon" className={homebodySCSS.svg} />
            </div>
            <div className={homebodySCSS.middleicons}>
              <img src={shape3} alt="icon" className={homebodySCSS.svg} />
            </div>
          </div>
          {/* bottom */}
          <div className={homebodySCSS.body__design_container_right}>
            <div className={homebodySCSS.righticons}>
              <img src={righttop} alt="circle" className={homebodySCSS.svg} />
            </div>
            <div className={homebodySCSS.lefticons}>
              <img src={rightmiddle} alt="icon" className={homebodySCSS.svg} />
            </div>
            <div className={homebodySCSS.lefticons}>
              <img src={rightbottom} alt="icon" className={homebodySCSS.svg} />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
