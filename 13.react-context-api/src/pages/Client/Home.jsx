import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

  return (
    <div>
      <h1>{t("homePage.bookStore")}</h1>
      <p>{t("homePage.welcomeMessage")}</p>
    </div>
  )
}

export default Home