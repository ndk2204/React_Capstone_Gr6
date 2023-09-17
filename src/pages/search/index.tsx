import React from "react";
import css from "./search.module.scss";
import arrow from "src/assets/imgs/arrdown.svg";
function Search() {
  return (
    <>
      <div className={css.inputSearch}>
        <p className={css.title}>Search</p>
        <input placeholder="Product name..." type="text" />
        <button>SEARCH</button>
      </div>
      <div className={css.resultSearch}>
        <h1>Search result</h1>
        <div className={css.boxAction}>
          <h3 className={css.title}>Price</h3>
          <p>Decrease</p>
          <p>Ascending</p>
          <img className={css.priceAction} src={arrow} />
        </div>
      </div>
    </>
  );
}

export default Search;
