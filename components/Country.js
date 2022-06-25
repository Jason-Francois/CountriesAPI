import Image from "next/image";
import styles from "../styles/components/Country.module.scss";
const Country = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img
            alt={`Flag of ${props.flagData.name.common}`}
            style={{ width: "100%" }}
            src={props.flagData.flags.png}
          />
        </div>
        <div className={styles["country-info-container"]}>
          <h3 className={styles.name}>{props.flagData.name.common}</h3>
          <p>
            {" "}
            <span className={styles["country-caption"]}>Population:</span>
            {props.flagData.population}
          </p>
          <p>
            {" "}
            <span className={styles["country-caption"]}>Region:</span>
            {props.flagData.region}
          </p>
          <p>
            {" "}
            <span className={styles["country-caption"]}>Capital:</span>
            {props.flagData.capital}
          </p>
        </div>
      </div>
    </>
  );
};

export default Country;
