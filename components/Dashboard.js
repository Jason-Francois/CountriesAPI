import { useEffect, useState } from "react";
import Country from "./Country";
import styles from "../styles/pages/Home.module.scss";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  const [countries, setCountries] = useState([]);
  const [initialCountries, setInitialCountries] = useState([]);

  const fetchCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setCountries(data);
    setInitialCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const removeFilterOptions = () => {
    const elements = document.querySelector(`.${styles.selected}`);
    if (elements) {
      elements.classList.remove(`${styles.selected}`);
    }
  };
  const onChange = (e) => {
    const query = e.target.value.toLowerCase();
    removeFilterOptions();
    setCountries(
      initialCountries.filter((x) =>
        x.name.common.toLowerCase().includes(query)
      )
    );
  };
  const onClick = (e) => {
    const value = e.target.textContent;
    removeFilterOptions();
    e.target.classList.add(`${styles.selected}`);
    setCountries(
      initialCountries.filter(
        (x) => x.region.toLowerCase() == value.toLowerCase()
      )
    );
  };
  return (
    <>
      <Search onChange={onChange} onClick={onClick} />
      <div className={[styles.container]}>
        {countries.map((country, _) => (
          <Country key={uuidv4()} flagData={country} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
