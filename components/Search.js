import styles from "../styles/components/Search.module.scss";

const Search = (props) => {
  const onToggleClick = () => {
    const options = document.querySelector(`.${styles["filterOptions"]}`);
    options.classList.toggle(`${styles["fade"]}`);
  };
  return (
    <>
      <div style={{ marginBottom: "3rem" }}>
        <div className={styles["search-container"]}>
          <i
            className={`fa fa-search ${styles["search-icon"]}`}
            aria-hidden="true"
          />
          <input
            className={styles.search}
            type="text"
            placeholder="Search for a country..."
            onChange={props.onChange}
          />
        </div>
        <div className={styles["filter-container"]}>
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
              className={`fa fa-angle-down ${styles["filter-toggle"]}`}
              onClick={onToggleClick}
            ></i>
          </div>
          <div className={styles.filterOptions}>
            <p className={styles.filterOption} onClick={props.onClick}>
              Africa
            </p>
            <p className={styles.filterOption} onClick={props.onClick}>
              Americas
            </p>
            <p className={styles.filterOption} onClick={props.onClick}>
              Asia
            </p>
            <p className={styles.filterOption} onClick={props.onClick}>
              Europe
            </p>
            <p className={styles.filterOption} onClick={props.onClick}>
              Oceania
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
