import styles from "../styles/components/Navbar.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const onClick = () => {
    const body = document.querySelector("body");
    if (theme === "light") {
      body.classList.add(`dark__background`);
    } else {
      body.classList.remove(`dark__background`);
    }
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav className={`${styles.nav} ${theme}`}>
      <div className={`${theme}__background2`}>
        <ul className={`${theme}__text`}>
          <Link href="/">
            <li className={styles["nav__logo"]} style={{ fontWeight: 800 }}>
              Where in the World?
            </li>
          </Link>
          <li>
            <a style={{ cursor: "pointer" }} onClick={onClick}>
              <i className="fa-regular fa-moon"></i>Dark Mode
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
