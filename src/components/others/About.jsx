import { useTranslation } from "react-i18next";
import clothes from "../../assets/images/clohtes.svg";

function About() {
  const { t } = useTranslation();
  return (
    <div className="container px-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center mb-8 sm:mb-12 gap-3">
            <div className="flex items-center gap-4 w-full">
              <h1 className="text-2xl sm:text-[32px] whitespace-nowrap">
                <span className="text-[#C778DD]">#</span>
                {t("about.name")}
              </h1>

              <div className="hidden md:block flex-1 h-px bg-[#C778DD] max-w-80 lg:max-w-130"></div>
            </div>
          </div>
          <div className="text-[#ABB2BF] w-1/2">
            <h1 className="text">{t("about.umar")}</h1>
            <p>{t("about.dec1")}</p>
            <p>{t("about.dec2")}</p>
            <p>{t("about.dec3")}</p>
          </div>
        </div>
        <div>
          <img src={clothes} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
