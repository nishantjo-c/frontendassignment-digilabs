import blogSCSS from "./Blogs.module.scss";
// icons and images
import image1 from "../../../public/image1.svg";
import image2 from "../../../public/image2.svg";
import image3 from "../../../public/image3.svg";
import andrewCEO from "../../../public/andrewCEO.svg";
import andrewUI from "../../../public/andrewUI.svg";
import davidUX from "../../../public/davidUX.svg";
import Investors from "./Investors";

export default function Blogs() {
  return (
    <>
      <div className={blogSCSS.container}>
        <div className={blogSCSS.container__header}>
          <h2 className={blogSCSS.container__header_title}>
            Latest Blog Posts
          </h2>
          <p className={blogSCSS.container__header_subtitle}>
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas.
          </p>
        </div>
        {/* body */}
        <div className={blogSCSS.container__body}>
          {/* card 1 */}
          <div className={blogSCSS.container__body_card}>
            <div className={blogSCSS.container__body_card_image}>
              <img
                src={image1}
                alt="image"
                // image name kept same as container so the same css property shared
                className={blogSCSS.container__body_card_image_img}
              />
            </div>
            <h2 className={blogSCSS.container__body_card_title}>
              Organize your digital assets with a new methodology here.
            </h2>
            <p className={blogSCSS.container__body_card_subtitle}>
              Podcasting operational management inside of workflows to establish
              a framework seamless. Convergence collaboratively.
            </p>
            {/* img and description */}
            <div className={blogSCSS.info}>
              <div className={blogSCSS.info_image}>
                <img src={andrewCEO} alt="photo" />
              </div>
              <div className={blogSCSS.info_about}>
                <h2 className={blogSCSS.info_about_name}>Andrew Miller</h2>
                <p className={blogSCSS.info_about_designation}>CEO</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className={blogSCSS.container__body_card}>
            <div className={blogSCSS.container__body_card_image}>
              <img
                src={image2}
                alt="image"
                className={blogSCSS.container__body_card_image_img}
              />
            </div>
            <h2 className={blogSCSS.container__body_card_title}>
              Organize your digital assets with a new methodology here.
            </h2>
            <p className={blogSCSS.container__body_card_subtitle}>
              Podcasting operational management inside of workflows to establish
              a framework seamless. Convergence collaboratively.
            </p>
            {/* img and description */}
            <div className={blogSCSS.info}>
              <div className={blogSCSS.info_image}>
                <img src={davidUX} alt="photo" />
              </div>
              <div className={blogSCSS.info_about}>
                <h2 className={blogSCSS.info_about_name}>Andrew Miller</h2>
                <p className={blogSCSS.info_about_designation}>CEO</p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className={blogSCSS.container__body_card}>
            <div className={blogSCSS.container__body_card_image}>
              <img
                src={image3}
                alt="image"
                className={blogSCSS.container__body_card_image_img}
              />
            </div>
            <h2 className={blogSCSS.container__body_card_title}>
              Organize your digital assets with a new methodology here.
            </h2>
            <p className={blogSCSS.container__body_card_subtitle}>
              Podcasting operational management inside of workflows to establish
              a framework seamless. Convergence collaboratively.
            </p>
            {/* img and description */}
            <div className={blogSCSS.info}>
              <div className={blogSCSS.info_image}>
                <img src={andrewUI} alt="photo" />
              </div>
              <div className={blogSCSS.info_about}>
                <h2 className={blogSCSS.info_about_name}>Andrew Miller</h2>
                <p className={blogSCSS.info_about_designation}>CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Investors />
    </>
  );
}
