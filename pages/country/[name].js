import Link from "next/link";
import styles from "../../styles/pages/CountryPage.module.scss";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../components/contexts/ThemeContext";
export async function getStaticPaths() {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();
  const paths = data.map((country) => {
    return {
      params: {
        name: `${country.name.common}`,
      },
    };
  });
  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const name = params.name;
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const countryData = await res.json();
  let borderData = null;
  if (countryData[0].borders) {
    let codes = countryData[0].borders.join(",");
    const res2 = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${codes}`
    );
    borderData = await res2.json();
    borderData = borderData.map((x) => x.name.common);
  }
  return {
    props: {
      Data: countryData[0],
      BorderCountries: borderData,
    },
    revalidate: 1,
  };
}

const getObjectProps = (obj, targetPropName) => {
  const results = [];
  for (const prop in obj) {
    results.push(obj[prop][targetPropName]);
  }
  return formatArray(results);
};
const formatArray = (arr) => {
  if (arr.length != 0) {
    return arr.length == 1 ? arr[0] : arr.join(", ");
  } else {
    return null;
  }
};
const getBorderCountryButtons = (borderArr, theme) => {
  return borderArr.map((country, index) => {
    return (
      <Link key={index} href={`/country/${country}`}>
        <button
          className={`${styles["button"]} ${styles["button-border"]} ${theme}__button`}
        >
          {country}
        </button>
      </Link>
    );
  });
};
const CountryPage = (props) => {
  const countryInfo = props.Data;
  const borderCountries = props.BorderCountries;
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <button className={`${styles.button} ${theme}__button`}>
            <i
              className={`fa-solid fa-arrow-left`}
              style={{ marginRight: "1rem" }}
            ></i>
            Back
          </button>
        </Link>
        <div className={styles.country}>
          <div className={styles["country__flag"]}>
            <Image
              src={countryInfo.flags.png}
              alt={`Flag of ${countryInfo.name.common}`}
              layout="fill"
            />
          </div>

          <div className={`${styles["info"]} ${theme}__text`}>
            <h2 className={styles["country__title"]}>
              {countryInfo.name.common}
            </h2>
            <div className={styles["info__columns"]}>
              <div className={styles["info-left"]}>
                <div className={styles["info__container"]}>
                  <h4 className={styles["info__label"]}>Native Name:</h4>
                  <span className={styles["info__text"]}>
                    {getObjectProps(countryInfo.name.nativeName, "common")}
                  </span>
                </div>
                <div className={styles["info__container"]}>
                  <h4 className={styles["info__label"]}>Population:</h4>
                  <span className={styles["info__text"]}>
                    {countryInfo.population.toLocaleString("en-US")}
                  </span>
                </div>
                <div className={styles["info__container"]}>
                  <h4 className={styles["info__label"]}>Region:</h4>
                  <span className={styles["info__text"]}>
                    {countryInfo.region}
                  </span>
                </div>
                <div className={styles["info__container"]}>
                  <h4 className={styles["info__label"]}>Sub Region:</h4>
                  <span className={styles["info__text"]}>
                    {countryInfo.subregion}
                  </span>
                </div>
                <div className={styles["info__container"]}>
                  <h4 className={styles["info__label"]}>Capital:</h4>
                  <span className={styles["info__text"]}>
                    {formatArray(countryInfo.capital)}
                  </span>
                </div>
              </div>
              <div className={styles["info-right"]}>
                <div className={styles["info__container"]}>
                  <h4 className={styles["info__label"]}>Top Level Domain:</h4>
                  <span className={styles["info__text"]}>
                    {countryInfo.tld ? formatArray(countryInfo.tld) : ""}
                  </span>
                </div>
                <div className={styles["info__container"]}>
                  <h4 className={styles["info__label"]}>Currencies:</h4>
                  <span className={styles["info__text"]}>
                    {getObjectProps(countryInfo.currencies, "name")}
                  </span>
                </div>
                <div className={styles["info__container"]}>
                  <h4 className={styles["info__label"]}>Languages:</h4>
                  <span className={styles["info__text"]}>
                    {formatArray(Object.values(countryInfo.languages))}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles["border"]}>
              <h4 className={styles["info__label"]}>Border Countries:</h4>
              <div className={styles["borderCountries"]}>
                {borderCountries
                  ? getBorderCountryButtons(borderCountries, theme)
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CountryPage;
