import { useTranslation } from "react-i18next";
import some from "../../assets/icons/some.svg";
import clothes from "../../assets/images/clohtes.svg";

function About() {
  const { t } = useTranslation();

  return (
    <section className="container relative px-4 py-12 md:py-16">
            <img className="absolute -left-47 top-1/4 hidden  translate-x-1/2 md:block" src={some} alt="" />
      <div className="mb-8 flex items-center gap-4">
        <h2 className="whitespace-nowrap text-[24px] md:text-[32px]  text-white">
          <span className="text-[#C778DD]">#</span>
          {t("about.name")}
        </h2>
        <div className="h-px w-full max-w-45 md:max-w-120 bg-[#C778DD]" />
      </div>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-130">
          <h3 className="mb-6 text-base md:text-lg font-medium text-[#FFFFFF]">
            {t("about.umar")}
          </h3>

          <div className="space-y-5 text-sm md:text-base leading-7 text-[#ABB2BF]">
            <p>{t("about.dec1")}</p>
            <p>{t("about.dec2")}</p>
            <p>{t("about.dec3")}</p>
          </div>

          <button className="mt-8 inline-flex items-center gap-2 border border-[#C778DD] px-4 py-2 text-sm text-white transition hover:bg-[#C778DD]/10">
            {t("about.readMore")}
            <span>→</span>
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
         
            <img
              src={clothes}
              alt="about"
              className=" object-contain"
            />
          </div>
       
      </div>
    </section>
  );
}

export default About;