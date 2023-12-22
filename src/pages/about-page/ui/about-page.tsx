import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation("about-us-page");

  return <div>{t("aboutUsPage")}</div>;
};

export default AboutPage;
