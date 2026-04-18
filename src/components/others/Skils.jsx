import React from "react";
import { useTranslation } from "react-i18next";
import imges from "../../assets/icons/texts.svg";

function Skils() {
  const { t } = useTranslation();

  const skills = [
    {
      id: 1,
      name: "Languages",
      skils: ["TypeScript", "Lua", "Python", "JavaScript"],
    },
    {
      id: 2,
      name: "Databases",
      skils: ["SQLite", "PostgreSQL", "Mongo"],
    },
    {
      id: 3,
      name: "Tools",
      skils: ["VSCode", "Figma", "Git", "GitHub", "GitLab", "Font Awesome"],
    },
    {
      id: 4,
      name: "Other",
      skils: ["HTML", "CSS", "SCSS", "REST"],
    },
    {
      id: 5,
      name: "Frameworks",
      skils: ["React", "Express.js", "Flask", "JavaScript"],
    },
    
  ];

  return (
    <div className="min-h-screen container flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-8 mx-auto">
      <div>
        <div className="flex items-center mb-8 sm:mb-12 gap-3">
          <div className="flex items-center gap-4 w-full">
            <h1 className="text-2xl sm:text-[32px] whitespace-nowrap">
              <span className="text-[#C778DD]">#</span>
              {t("skills.name")}
            </h1>

            <div className="hidden md:block flex-1 h-px bg-[#C778DD] max-w-80 lg:max-w-130"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between ">
          <div className="w-full lg:w-[35%] flex justify-center lg:justify-start">
            <img
              src={imges}
              alt="text"
              className="h-auto object-contain max-w-55 sm:max-w-65 md:max-w-75 lg:max-w-full"
            />
          </div>

          <div className="w-full lg:w-[55%] grid grid-cols-2 mt-4 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {skills.map((item) => (
              <div
                key={item.id}
                className="border border-[#ABB2BF] h-fit bg-transparent self-start"
              >
                <div className="border-b border-[#ABB2BF] px-4 py-3">
                  <h1 className="text-white text-[18px] sm:text-[20px] font-semibold">
                    {item.name}
                  </h1>
                </div>

                <div className="p-4">
                  <p className="text-[#ABB2BF] text-base sm:text-lg leading-8">
                    {item.skils.join(" ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skils;
