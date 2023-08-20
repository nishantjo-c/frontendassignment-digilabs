import logo from "../../../public/CompanyLogo.svg";
import navSCSS from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <>
      <div className={navSCSS.navigationbar}>
        {/* logo */}
        <div className={navSCSS.navigationbar__logo}>
          <img
            src={logo}
            alt="logo"
            className={navSCSS.navigationbar__logo_icon}
          />
        </div>
        {/* nav items */}
        <div className={navSCSS.navigationbar__navitems}>
          <p className={navSCSS.navigationbar__navitems_item}>Home</p>
          <p className={navSCSS.navigationbar__navitems_item}>Our Products</p>
          <p className={navSCSS.navigationbar__navitems_item}>Resources</p>
          <p className={navSCSS.navigationbar__navitems_item}>Contacts</p>
        </div>
        {/* nav buttons */}
        <div className={navSCSS.navigationbar__buttons}>
          <button className={navSCSS.navigationbar__buttons_btn}>Log in</button>
          <button
            className={`${navSCSS.navigationbar__buttons_btn} ${navSCSS.navigationbar__buttons_signup}`}
          >
            Sign up
          </button>
        </div>
      </div>
      {/* after tablet mode hamburger */}
      <div className={navSCSS.hamburger_nav}>
        {/* logo */}
        <div className={navSCSS.nav_logo}>
          <img src={logo} alt="logo" className={navSCSS.nav_logo_icon} />
        </div>
        {/* hamburger */}
        <input
          type="checkbox"
          class={navSCSS.hamburger_checkbox}
          id="hamburger"
        />
        <label class={navSCSS.hamburger} for="hamburger">
          <span class={navSCSS.bar}></span>
          <span class={navSCSS.bar}></span>
          <span class={navSCSS.bar}></span>
        </label>
        <div class={navSCSS.nav_links}>
          <label for="hamburger" class={navSCSS.close_btn}>
            {/* × */}
          </label>
          <a href="#">Home</a>
          <a href="#">Our Products</a>
          <a href="#">Resources</a>
          <a href="#">Contacts</a>
        </div>
      </div>
    </>
  );
}
