import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import img from "../../assets/images/prodects.svg";
import img1 from "../../assets/images/prodects1.svg";
import img2 from "../../assets/images/prodects2.svg";

function Project() {
  const prodects = [
    {
      id: 1,
      name: "ChertNodes",
      description: "Minecraft servers hosting ",
      skils: ["Html ", "Css ", "Python ", "Flask"],
      img: img,
    },
    {
      id: 2,
      name: "ProtectX",
      description: "Discord anti-crash bot",
      skils: ["React ", "Express ", "Python ", "Flask ", "Discord.js"],
      img: img1,
    },
    {
      id: 3,
      name: "Kahoot Answers Viewer",
      description: "Minecraft servers hosting ",
      skils: ["Html ", "Css ", "Python ", "Flask"],
      img: img2,
    },
  ];

  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container px-8">
        <div className="flex items-center mb-12 justify-between gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 w-full">
            <h1 className="text-2xl sm:text-[32px] whitespace-nowrap">
              <span className="text-[#C778DD]">#</span>
              {t("projects.name")}
            </h1>

            <div className="hidden md:block flex-1 max-w-100 lg:max-w-160 h-px bg-[#C778DD]"></div>
          </div>

          <Link className="text-base mt-1.5 sm:mt-0 sm:text-base self-start sm:self-auto whitespace-nowrap">
            {t("projects.view")}
          </Link>
        </div>

        <div className="grid w-full md:px-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {prodects.map((item) => (
            <div
              key={item.id}
              className="border border-[#ABB2BF] bg-transparent flex flex-col overflow-hidden"
            >
              <img
                src={item.img}
                alt="item img"
                className="w-full h-52 object-cover sm:h-56 md:h-60"
              />

              <div className="p-3 border-b border-[#ABB2BF]">
                <p className="text-[#ABB2BF] text-sm sm:text-base md:text-lg ">
                  {item.skils}
                </p>
              </div>

              <div className="p-4 flex-1">
                <h1 className="text-xl sm:text-2xl mb-3">{item.name}</h1>
                <p className="text-[#ABB2BF] text-sm sm:text-base leading-6">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 pt-0">
                <Link className="border p-2 px-4 border-[#C778DD] text-center w-full sm:w-auto">
                  {t("projects.live")}
                </Link>
                <Link className="border p-2 px-4 text-[#ABB2BF] text-center w-full sm:w-auto">
                  {t("projects.catch")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
