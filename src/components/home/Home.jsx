import homeSCSS from "./Home.module.scss";
import Navigation from "./Navigation";

export default function Home() {
  return (
    <div className={homeSCSS.container}>
      <Navigation />
    </div>
  );
}
