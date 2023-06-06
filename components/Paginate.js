import { useState, useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

import styles from "../styles/components/Paginate.module.scss";
const getArrayOfNums = (low, high) => {
  const arr = [];
  for (let i = low; i <= high; i++) {
    arr.push(i);
  }
  return arr;
};
const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
  const totalNumPages = Math.ceil(totalPosts / postsPerPage);
  const PAGE_SPAN = 4;
  const [lowerLimit, setLowerLimit] = useState(1);
  const { theme } = useContext(ThemeContext);
  const [pageNumbers, setPageNumbers] = useState(getArrayOfNums(1, PAGE_SPAN));
  const removeSelectedPages = () => {
    const elements = document.querySelector(`.${styles.selected}`);
    if (elements) {
      elements.classList.remove(`${styles.selected}`);
    }
  };

  const handleNextClick = () => {
    const newLowerLimit = lowerLimit + PAGE_SPAN;
    if (newLowerLimit + PAGE_SPAN < totalNumPages) {
      setLowerLimit(lowerLimit + PAGE_SPAN);
      setPageNumbers(
        getArrayOfNums(newLowerLimit, newLowerLimit + PAGE_SPAN - 1)
      );
    } else {
      setLowerLimit(totalNumPages);
      setPageNumbers(getArrayOfNums(totalNumPages, totalNumPages));
    }
  };
  const handlePrevClick = () => {
    const newLowerLimit = lowerLimit - PAGE_SPAN;
    if (newLowerLimit > PAGE_SPAN) {
      const newLowerLimit = lowerLimit - PAGE_SPAN;
      setLowerLimit(newLowerLimit);
      setPageNumbers(
        getArrayOfNums(newLowerLimit, newLowerLimit + PAGE_SPAN - 1)
      );
    } else {
      setLowerLimit(1);
      setPageNumbers(getArrayOfNums(1, PAGE_SPAN));
    }
  };
  return (
    <>
      <div className={`${styles["paginate__container"]} ${theme}__background `}>
        <button
          id="prevBtn"
          className={styles["paginate__btn"]}
          onClick={handlePrevClick}
        >
          {"<"}
        </button>
        <ul
          id="pagination-slide"
          className={`${styles["paginate__list"]} ${theme}__background2`}
        >
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                className={`${theme}__text`}
                href="#/"
                onClick={(e) => {
                  removeSelectedPages();
                  paginate(number);
                  e.target.classList.toggle(styles["selected"]);
                }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
        <button
          id="nextBtn"
          className={styles["paginate__btn"]}
          onClick={handleNextClick}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default Paginate;
