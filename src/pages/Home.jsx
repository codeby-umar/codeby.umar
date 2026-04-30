import { useTranslation } from "react-i18next"
import HeroSection from "../components/others/HeroSection";
import Smartalk from "../components/others/Smartalk";
import Project from "../components/others/Project";
import Skils from "../components/others/Skils";
import About from "../components/others/About";
import Contacts from "../components/others/Contacts";

function Home() {
  const {t} = useTranslation();
  return (
    <div className="h-full">
       <HeroSection/>
       <Smartalk/>
       <Project/>
       <Skils/>
       <About/>
       <Contacts/>
    </div>
  )
}

export default Home