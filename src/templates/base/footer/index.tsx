import React from "react";
import css from "./footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={css["footer-about"]}>
        <div className={css["help"]}>
          <h2>GET HELP</h2>
          <Link to='/'>Home</Link>
          <a href='https://www.nike.com'>Nike</a>
          <a href='https://www.adidas.com'>Adidas</a>
          <Link to='#'>Contact</Link>
        </div>
        <div className={css["support"]}>
          <h2>SUPPORT</h2>
          <Link to='#'>About</Link>
          <Link to='#'>Contact</Link>
          <Link to='#'>Help</Link>
          <Link to='#'>Phone</Link>
        </div>
        <div className={css["register"]}>
          <h2>REGISTER</h2>
          <Link to='/register'>Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className={css["copyright"]}>
        <p> © 2023 Cybersoft All Rights Reserved - Shoes Store | Design by Khanh Nguyen & Dao Ngo.</p>
      </div>


    </>
  );
}

export default Footer;
