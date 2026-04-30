import React from "react";
import { useTranslation } from "react-i18next";

function Contacts() {
  const { t } = useTranslation();
  return (
    <div className="container h-screen">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="whitespace-nowrap text-[24px] md:text-[32px]  text-white">
          <span className="text-[#C778DD]">#</span>
          {t("contacts.name")}
        </h2>
        <div className="h-px w-full max-w-45 md:max-w-120 bg-[#C778DD]" />
      </div>
    </div>
  );
}

export default Contacts;
