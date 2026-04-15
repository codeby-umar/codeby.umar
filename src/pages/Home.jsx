import { useTranslation } from "react-i18next"
import HeroSection from "../components/others/HeroSection";

function Home() {
  const {t} = useTranslation();
  return (
    <div className="h-screen">
       <HeroSection/>
    </div>
  )
}

export default Home