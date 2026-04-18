import { useTranslation } from "react-i18next";
import zam from "../../assets/images/zam.svg";

function Smartalk() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-x-hidden p-5 md:p-0">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex p-5 flex-col items-end justify-center">
          <div className="relative w-full border p-5 md:p-8">
            <img
              className="absolute -top-4 left-3 bg-[#282C33] px-2"
              src={zam}
              alt="qoshtirnoq"
            />
            <h1 className="text-center text-lg md:text-2xl">
              {t("home.smart")}
            </h1>
          </div>

          <div className="relative border p-3 md:p-4">
            <img
              className="absolute -top-3 right-3 bg-[#282C33] px-1"
              src={zam}
              alt="qoshtirnoq"
            />
            <p className="text-xl md:text-2xl">— Dr. Who</p>
          </div>
        </div>
      </div>

      <div className="absolute right-10 top-10 hidden h-21 w-24 translate-x-1/2 border border-[#ABB2BF] md:block"></div>
    </section>
  );
}

export default Smartalk;
