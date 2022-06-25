import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li style={{ fontWeight: 800 }}>Where in the World?</li>
        <li>
          <a>
            <i className="fa-regular fa-moon"></i>Dark Mode
          </a>
        </li>
      </ul>
    </nav>
  );
}
