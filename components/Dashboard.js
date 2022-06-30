import { useEffect, useState } from "react";
import Country from "./Country";
import styles from "../styles/pages/Home.module.scss";
import Search from "./Search";
import { uuid } from "uuidv4";

const Dashboard = (props) => {
  const [countries, setCountries] = useState([]);
  const [initialCountries, setInitialCountries] = useState([]);
  const fetchCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
    setInitialCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const onChange = (e) => {
    const query = e.target.value.toLowerCase();
    setCountries(
      initialCountries.filter((x) =>
        x.name.common.toLowerCase().includes(query)
      )
    );
  };
  return (
    <>
      <Search onChange={onChange} />
      <div className={[styles.container]}>
        {countries.map((country, index) => (
          <Country key={uuid()} flagData={country} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
