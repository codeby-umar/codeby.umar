import { useTranslation } from "react-i18next"
import HeroSection from "../components/others/HeroSection";
import Smartalk from "../components/others/Smartalk";
import Project from "../components/others/Project";

function Home() {
  const {t} = useTranslation();
  return (
    <div className="h-full">
       <HeroSection/>
       <Smartalk/>
       <Project/>
    </div>
  )
}

export default Home