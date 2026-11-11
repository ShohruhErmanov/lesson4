import { useContext } from "react";
import { Context } from "./context/ThemeContext";

import "./Header.css";

function Header() {
  const { theme, setTheme, language, setLanguage } = useContext(Context);
  const translations = {
    en: { language: "Language", theme: "Theme", light: "Light", dark: "Dark" },
    ru: { language: "Язык", theme: "Тема", light: "Светлая", dark: "Тёмная" },
  };
  const text = translations[language];

  return (
    <main className={`app-shell ${theme}`}>
      <div className="settings">
        <label className="setting">
          <span>{text.language}</span>
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </label>

        <label className="setting">
          <span>{text.theme}</span>
          <select
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            <option value="light">{text.light}</option>
            <option value="dark">{text.dark}</option>
          </select>
        </label>
      </div>
    </main>
  );
}

export default Header;
