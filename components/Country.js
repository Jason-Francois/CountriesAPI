import Image from "next/image";
import styles from "../styles/components/Country.module.scss";
const Country = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flag}>
          <img
            alt={`Flag of ${props.flagData.name.common}`}
            src={props.flagData.flags.png}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{props.flagData.name.common}</h3>
          <p>
            {" "}
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
