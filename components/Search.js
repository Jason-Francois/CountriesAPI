import styles from "../styles/components/Search.module.scss";

const Search = (props) => {
  return (
    <>
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
          <i id={styles["filter-toggle"]} className="fa fa-angle-down"></i>
        </div>
        <div className={styles.filterOptions}>
          <p className={styles.filterOption}>Africa</p>
          <p className={styles.filterOption}>America</p>
          <p className={styles.filterOption}>Asia</p>
          <p className={styles.filterOption}>Europe</p>
          <p className={styles.filterOption}>Oceania</p>
        </div>
      </div>
    </>
  );
};
export default Search;
