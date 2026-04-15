import { Link } from "react-router-dom";
import logo from "../../../public/umar.svg";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { AiOutlineGoogle } from "react-icons/ai";

function Footer() {
  const { t } = useTranslation();

  const socialClass =
    "group flex h-11 w-11 items-center justify-center rounded-xl border border-[#ABB2BF]/20  text-[#ABB2BF]  duration-300  hover:border-[#C778DD] hover:text-[#C778DD] ";

  return (
    <footer className="mt-20 border-t border-[#ABB2BF]/20">
      <div className="container py-10 md:py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Link
                className="flex items-center gap-2 transition duration-300 hover:opacity-90"
                to="/"
              >
                <img className="h-6 w-auto" src={logo} alt="logo icons" />
                <span className="text-lg font-bold text-white">
                  codeby.umar
                </span>
              </Link>

              <a
                className="text-sm text-[#ABB2BF] transition duration-300 hover:text-[#C778DD]"
                href="mailto:codingbyumar@gmail.com"
              >
                codingbyumar@gmail.com
              </a>
            </div>

            <p className="text-sm leading-7 text-[#ABB2BF] sm:text-base">
              {t("footer.description")}
            </p>
          </div>

          <div className="text-center md:text-right">
            <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
              {t("footer.media")}
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
              <a
                className={socialClass}
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub
                  size={24}
                  className="transition-transform duration-300 "
                />
              </a>

              <a
                className={socialClass}
                href="mailto:codingbyumar@gmail.com"
                aria-label="Google"
              >
                <AiOutlineGoogle
                  size={26}
                  className="transition-transform duration-300 "
                />
              </a>

              <a
                className={socialClass}
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  size={24}
                  className="transition-transform duration-300 "
                />
              </a>

              <a
                className={socialClass}
                href="https://figma.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Figma"
              >
                <CgFigma
                  size={26}
                  className="transition-transform duration-300 "
                />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-14 text-center text-sm text-[#ABB2BF] sm:text-base">
          {t("footer.umar")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;