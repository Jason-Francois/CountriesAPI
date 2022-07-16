import styles from "../styles/components/Search.module.scss";

const Search = (props) => {
  const onToggleClick = () => {
    const options = document.querySelector(`.${styles["filter__options"]}`);
    options.classList.toggle(`${styles["fade"]}`);
  };
  return (
    <>
      <div className={styles.container} style={{ marginBottom: "3rem" }}>
        <div className={styles.searchBarContainer}>
          <i className={`fa fa-search ${styles.icon}`} aria-hidden="true" />
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search for a country..."
            onChange={props.onChange}
          />
        </div>
        <div className={styles["filter__container"]}>
          <div className={styles.filter}>
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
          <div className={styles["filter__options"]}>
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
