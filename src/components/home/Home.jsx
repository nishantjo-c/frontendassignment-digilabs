import homeSCSS from "./Home.module.scss";
import Navigation from "../navigation/Navigation";
import HomeBody from "./HomeBody";
import Features from "../features/Features";
import Page1 from "../pages/Page1";

export default function Home() {
  return (
    <div className={homeSCSS.container}>
      <Navigation />
      <HomeBody />
      <Features />
      <Page1 />
    </div>
  );
}
