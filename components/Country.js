import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Country.module.scss";
const Country = (props) => {
  return (
    <>
      <div
        id={props.flagData.name.common}
        className={styles.container}
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
        <div className={styles.info}>
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
