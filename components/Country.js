import Link from "next/link";
import { useContext } from "react";
import styles from "../styles/components/Country.module.scss";
import { ThemeContext } from "./contexts/ThemeContext";
const Country = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        id={props.flagData.name.common}
        className={`${styles.container} ${theme}__background2`}
        onClick={props.onClick}
      >
        <Link href={`/country/${props.flagData.name.common}`}>
          <div className={styles.flag}>
            <img
              alt={`Flag of ${props.flagData.name.common}`}
              src={props.flagData.flags.png}
            />
          </div>
        </Link>
        <div className={`${styles.info} ${theme}__text`}>
          <h3 className={styles.name}>{props.flagData.name.common}</h3>
          <p>
            <span className={styles.caption}>Population:</span>
            {props.flagData.population.toLocaleString("en-US")}
          </p>
          <p>
            {" "}
            <span className={styles.caption}>Region:</span>
            {props.flagData.region}
          </p>
          <p>
            {" "}
            <span className={styles.caption}>Capital:</span>
            {props.flagData.capital}
          </p>
        </div>
      </div>
    </>
  );
};

export default Country;
