import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Skils() {
  const { t } = useTranslation();
  return (
    <div className="h-screen container px-8">
      <div className="flex items-center mb-12 justify-between gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 w-full">
          <h1 className="text-2xl sm:text-[32px] whitespace-nowrap">
            <span className="text-[#C778DD]">#</span>
            {t("skills.name")}
          </h1>

          <div className="hidden md:block flex-1 max-w-90 lg:max-w-100 h-px bg-[#C778DD]"></div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Skils;
