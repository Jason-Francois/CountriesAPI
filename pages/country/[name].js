import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/pages/CountryPage.module.scss";

const CountryPage = () => {
  const router = useRouter();
  const [countryData, setCountryData] = useState({});

  const fetchCountryData = async () => {
    if (router.isReady) {
      const { name } = router.query;
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      console.log(data);
      setCountryData(data[0]);
    }
  };
  useEffect(() => {
    fetchCountryData();
  }, [router.isReady]);
  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <button className={styles.button}>
            <i
              className="fa-solid fa-arrow-left"
              style={{ marginRight: "1rem" }}
            ></i>
            Back
          </button>
        </Link>
        <div className={styles.country}>
          <div className={styles["country__flag"]}>
            <img />
          </div>
          <div className={styles["country__info"]}></div>
        </div>
      </div>
    </>
  );
};
export default CountryPage;
