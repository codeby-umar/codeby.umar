import { useTranslation } from "react-i18next";
import images from "../../assets/icons/icon.svg";
import Logo from "../../assets/icons/Logo.svg";
import Dots from "../../assets/icons/Dots.svg";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-center">
      <div className="container min-h-150 flex flex-col-reverse items-center justify-evenly gap-10 px-4 py-10  md:flex-row md:gap-6">
        <div className="max-w-full text-center md:max-w-1/2 md:text-left">
          <h1 className="mb-8 text-[24px] font-semibold leading-[1.4] sm:text-[28px] md:text-[32px]">
            {t("home.title")}{" "}
            <span className="text-[#C778DD]">{t("home.log")}</span>{" "}
            <span>{t("home.and")}</span>{" "}
            <span className="text-[#C778DD]">{t("home.salom")}</span>
          </h1>

          <p className="text-[#ABB2BF] mb-6 max-w-116 text-sm sm:text-base">
            {t("home.description")}
          </p>

          <div>
            <button className="border px-6 border-[#C778DD] p-2.5">
              {t("home.button")}
            </button>
          </div>
        </div>
        <div>
          <div className="relative flex justify-center w-full md:w-auto">
            <img
              src={images}
              alt=""
              className="relative z-10 w-65 sm:w-[320px] md:w-95 lg:w-auto"
            />
            <img
              src={Logo}
              alt=""
              className="absolute top-10 left-2 z-0 w-17.5 sm:top-14 sm:left-4 sm:w-22.5 md:top-20 md:left-0 md:w-auto"
            />
            <img
              src={Dots}
              alt=""
              className="absolute right-2 bottom-4 z-50 w-17.5 sm:right-4 sm:bottom-6 sm:w-22.5 md:top-55 md:right-6 md:bottom-auto md:w-auto"
            />
          </div>
          <div className="flex items-center gap-3 border border-[#ABB2BF] p-2">
            <div className="h-4 w-4 bg-[#C778DD]"></div>
            <p className="text-[#ABB2BF] text-base">
              {t("home.current")} <span className="font-semibold text-white"> {t("home.port")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
