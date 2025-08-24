import { Link } from "react-router"
import styles from "./Home.module.scss"
import { useTheme } from "@/shared/config";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/UI/Button/Button";
const HomePage = () => {
  const {theme, toggleTheme} = useTheme();
  const {t, i18n} = useTranslation()

  const changeLocale = () => {
    i18n.changeLanguage(i18n.language === "en"? "de" : "en");
  }

  return (
    <>
      <h1 className={styles.title}>{t("hello")}</h1>
      <Button onClick={toggleTheme}>{theme}</Button>
      <Button form="rounded" theme="outline" onClick={changeLocale}>language</Button>
      <Link to={"/login"}>Login</Link>
    </>
  )
}

export default HomePage
