import i18n from "../i18n"; // path-ə uyğun yaz
// və ya: import i18n from "i18next";

const LanguageSwitcher = () => {
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLang("az")} className="cursor-pointer px-3 py-1 border rounded">
        AZ
      </button>
      <button onClick={() => changeLang("en")} className="cursor-pointer px-3 py-1 border rounded">
        EN
      </button>
      <button onClick={() => changeLang("ru")} className="cursor-pointer px-3 py-1 border rounded">
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;

