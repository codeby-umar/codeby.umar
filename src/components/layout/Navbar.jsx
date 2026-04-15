import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../public/umar.svg";
import { RxTextAlignRight } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Socialbar from "../ui/SocialBar";




function Navbar() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const navLinkClass = ({ isActive }) =>
    `text-base transition-colors ${isActive ? "text-white" : "text-[#ABB2BF]"}`;

  return (
    <header className="container py-6 px-5 md:py-8">
      <Socialbar/>
      <nav className="flex items-center justify-between">
        <Link className="flex items-center gap-2" to="/">
          <img className="h-6" src={logo} alt="logo icons" />
          <span className="text-lg font-bold text-white">codeby.umar</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              <span className="text-[#C778DD]">#</span>
              {t("navbar.home")}
            </NavLink>

            <NavLink to="/works" className={navLinkClass}>
              <span className="text-[#C778DD]">#</span>
              {t("navbar.work")}
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              <span className="text-[#C778DD]">#</span>
              {t("navbar.about")}
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              <span className="text-[#C778DD]">#</span>
              {t("navbar.contacts")}
            </NavLink>
          </ul>

          <select
            onChange={handleChange}
            value={i18n.language}
            className="w-fit bg-transparent text-[#ABB2BF] p-1 font-black uppercase outline-none"
          >
            <option className="text-black" value="uz">
              uz
            </option>
            <option className="text-black" value="en">
              en
            </option>
            <option className="text-black" value="ru">
              ru
            </option>
          </select>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1 md:hidden"
        >
          <RxTextAlignRight size={30} />
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="absolute top-0 right-0 h-full w-full border-l border-[#ABB2BF]/20 bg-[#282C33] px-6 py-8 shadow-2xl animate-[slideIn_.35s_ease-out]">
            <div className="mb-10 flex items-center justify-between">
              <Link className="flex items-center gap-2" to="/">
                <img className="h-6" src={logo} alt="logo icons" />
                <span className="text-lg font-bold text-white">
                  codeby.umar
                </span>
              </Link>

              <button onClick={() => setIsOpen(false)}>
                <RxCross2 size={25} />
              </button>
            </div>

            <ul className="flex justify-center py-[30%] items-center flex-col gap-8">
              <li className="animate-[fadeUp_.4s_ease-out]">
                <NavLink
                  to="/"
                  className="text-3xl"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#C778DD]">#</span>
                  {t("navbar.home")}
                </NavLink>
              </li>

              <li className="animate-[fadeUp_.5s_ease-out]">
                <NavLink
                  to="/works"
                  className="text-3xl"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#C778DD]">#</span>
                  {t("navbar.work")}
                </NavLink>
              </li>

              <li className="animate-[fadeUp_.6s_ease-out]">
                <NavLink
                  to="/about"
                  className="text-3xl"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#C778DD]">#</span>
                  {t("navbar.about")}
                </NavLink>
              </li>

              <li className="animate-[fadeUp_.7s_ease-out]">
                <NavLink
                  to="/contact"
                  className="text-3xl"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#C778DD]">#</span>
                  {t("navbar.contacts")}
                </NavLink>
              </li>
            </ul>
            <div className="absolute bottom-8 left-6 right-6 animate-[fadeUp_.8s_ease-out]">
              <label className="mb-2 block text-sm text-[#ABB2BF]">
                Language
              </label>
              <select
                onChange={handleChange}
                value={i18n.language}
                className="w-full rounded-xl border border-[#ABB2BF]/20 bg-[#282C33] px-4 py-3 font-semibold uppercase text-white outline-none transition focus:border-[#C778DD]"
              >
                <option className="text-black" value="uz">
                  uz
                </option>
                <option className="text-black" value="en">
                  en
                </option>
                <option className="text-black" value="ru">
                  ru
                </option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
