import React, { useEffect } from "react";
import css from "./header.module.scss";

/** cách 1: */
import searchSvg from "src/assets/imgs/search.svg";
// import IconSearch from "src/assets/icons/search.icon";
// import IconCart from "src/assets/icons/cart.icon";
import { IconCart, IconSearch } from "src/assets/icons";

import imgLogo from "src/assets/imgs/logo.png";
import { Link, NavLink } from "react-router-dom";
import { getLocalStorage } from "src/utils";

function Header() {
  // console.log({ css });
  let dataLocal = getLocalStorage("localCarts");
  let soLuongCarts = 0;

  if (!dataLocal) {
    soLuongCarts = 0;
  } else {
    soLuongCarts = dataLocal.length;
  }
  // useEffect(() => {
  //   console.log(dataLocal);
  //   if (!dataLocal) {
  //     return;
  //   }
  // },[dataLocal.length]);

  const handleClassActive = ({ isActive }: any) => {
    return isActive ? css.active : "";
  };

  return (
    <>
      <header className={css.header}>
        <Link to="/">
          <img src={imgLogo} />
        </Link>

        <div className={css["header-left"]}>
          <Link to="/search" className={css["header-left-search"]}>
            <IconSearch />
            <span>Search</span>
          </Link>
          <Link to="/carts" className={css["header-left-cart"]}>
            <IconCart />
            <span>({soLuongCarts})</span>
          </Link>
          <div className={css["header-left-author"]}>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </header>
      <nav>
        <ul className={css["nav"]}>
          <li>
            <NavLink className={handleClassActive} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={handleClassActive} to={"/men"}>
              Men
            </NavLink>
          </li>
          <li>
            <NavLink className={handleClassActive} to={"/woman"}>
              Woman
            </NavLink>
          </li>
          <li>
            <NavLink className={handleClassActive} to={"/kid"}>
              Kid
            </NavLink>
          </li>
          <li>
            <NavLink className={handleClassActive} to={"/sport"}>
              Sport
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
