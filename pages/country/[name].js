import Link from "next/link";
import styles from "../../styles/pages/CountryPage.module.scss";

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
  const data = await res.json();
  return {
    props: { data },
    revalidate: 1,
  };
}

const CountryPage = (props) => {
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
  const countryInfo = props.data[0];
  console.log(countryInfo);
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
            <img src={countryInfo.flags.png} />
          </div>
          <h2 className={styles["country__title"]}>
            {countryInfo.name.common}
          </h2>
          <div className={styles["info"]}>
            <div className={styles["info-left"]}>
              <div className={styles["info__container"]}>
                <h4 className={styles["info__label"]}>Native Name:</h4>
                <span>{countryInfo.name.nativeName.nld.common}</span>
              </div>
              <div className={styles["info__container"]}>
                <h4 className={styles["info__label"]}>Population:</h4>
                <span>{countryInfo.population.toLocaleString("en-US")}</span>
              </div>
              <div className={styles["info__container"]}>
                <h4 className={styles["info__label"]}>Region:</h4>
                <span>{countryInfo.region}</span>
              </div>
              <div className={styles["info__container"]}>
                <h4 className={styles["info__label"]}>Sub Region:</h4>
                <span>{countryInfo.subregion}</span>
              </div>
              <div className={styles["info__container"]}>
                <h4 className={styles["info__label"]}>Capital:</h4>
                <span>{formatArray(countryInfo.capital)}</span>
              </div>
            </div>
            <div className={styles["info-right"]}>
              <div className={styles["info__container"]}>
                <h4 className={styles["info__label"]}>Top Level Domain:</h4>
                <span>{formatArray(countryInfo.tld)}</span>
              </div>
              <div className={styles["info__container"]}>
                <h4 className={styles["info__label"]}>Currencies:</h4>
                <span>{getObjectProps(countryInfo.currencies, "name")}</span>
              </div>
              <div className={styles["info__container"]}>
                <h4 className={styles["info__label"]}>Languages:</h4>
                <span>{formatArray(Object.values(countryInfo.languages))}</span>
              </div>
            </div>
            <div className={styles["border"]}>
              <h4 className={styles["info__label"]}>Border Countries:</h4>

              <div className={styles["borderCountries"]}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CountryPage;
