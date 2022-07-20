import styles from "../styles/components/Navbar.module.scss";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link href="/">
          <li className={styles["nav__logo"]} style={{ fontWeight: 800 }}>
            Where in the World?
          </li>
        </Link>
        <li>
          <a>
            <i className="fa-regular fa-moon"></i>Dark Mode
          </a>
        </li>
      </ul>
    </nav>
  );
}
