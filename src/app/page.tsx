import { Header } from "./components/Header/header";
import { Experience } from "./components/Experience/experience";
import Info from "./components/Information/info";
import { EmailIcon } from "./components/icons/email-icon";

import "./styles/home.scss";
import SocialBtns from "./components/SocialButtons/socialBtns";

export default function Home() {
  return (
    <main className="container">
      <Header />

      <Experience />

      <Info />

      <div className="buttons">
        <SocialBtns />

        <a className="btn-primary" href="mailto:raphael02oliveira@gmail.com">
          Contact me
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
