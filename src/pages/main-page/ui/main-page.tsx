import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const { t, i18n } = useTranslation("main-page");

  return <div>{t("mainPage")}</div>;
};
