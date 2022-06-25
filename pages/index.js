import { useEffect, useState } from "react";
import Country from "../components/Country";
import styles from "../styles/pages/Home.module.scss";
import Search from "../components/Search";

// Get all of the countries from
// the RESTCountries API
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return {
    props: { countries: data },
  };
};

const Home = (props) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (props.countries) {
      setCountries(props.countries);
      // console.log(countries[0]);
    }
  }, []);

  const onChange = (e) => {
    const query = e.target.value.toLowerCase();
    setCountries(
      props.countries.filter((x) => x.name.common.toLowerCase().includes(query))
    );
  };
  return (
    <>
      <Search onChange={onChange} />
      <div className={[styles.container]}>
        {countries.map((country, index) => (
          <Country key={index} flagData={country} />
        ))}
      </div>
    </>
  );
};

export default Home;
