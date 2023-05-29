import { useContext } from "react";
import styles from "../styles/components/Search.module.scss";
import { ThemeContext } from "./contexts/ThemeContext";

const Search = (props) => {
  const onToggleClick = () => {
    const options = document.querySelector(`#filterOptions`);
    options.classList.toggle(`fade`);
  };
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.container} style={{ marginBottom: "3rem" }}>
        <div className={styles.searchBarContainer}>
          <i
            className={`fa fa-search ${styles.icon} ${theme}__searchIcon`}
            aria-hidden="true"
          />
          <input
            className={`${styles.searchBar} ${theme}__search ${theme}__background2`}
            type="text"
            placeholder="Search for a country..."
            onChange={props.onChange}
          />
        </div>
        <div>
          <div
            className={`${styles.filter} ${theme}__text ${theme}__background2`}
          >
            <p
              style={{
                fontWeight: 400,
                letterSpacing: "0.05px",
                paddingRight: "22px",
              }}
            >
              Filter by Region
            </p>
            <i
              className={`fa fa-angle-down ${styles["filter__btn-toggle"]}`}
              onClick={onToggleClick}
            ></i>
          </div>
          <div
            id="filterOptions"
            className={`${styles["filter__options"]} ${theme}__text ${theme}__background2`}
          >
            <p className={styles["filter__option"]} onClick={props.onClick}>
              Africa
            </p>
            <p className={styles["filter__option"]} onClick={props.onClick}>
              Americas
            </p>
            <p className={styles["filter__option"]} onClick={props.onClick}>
              Asia
            </p>
            <p className={styles["filter__option"]} onClick={props.onClick}>
              Europe
            </p>
            <p className={styles["filter__option"]} onClick={props.onClick}>
              Oceania
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
