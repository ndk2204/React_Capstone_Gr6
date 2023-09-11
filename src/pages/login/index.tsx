import { useState } from "react";
import { userLogin } from "src/services/user.service";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";
import css from "./login.module.scss";
import { Link } from "react-router-dom";

function Login() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userLogin(formLogin)
      .then((resp) => {
        /**
         * 1. lưu storage
         * 2. navigate profile
         */

        setLocalStorage(ACCESS_TOKEN, resp.content.accessToken);

        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  return (
    <div className={css["container"]}>
      <h2 className={css["login__text"]}>Login</h2>
      <hr></hr>
      <form className={css["login__form"]} onSubmit={handleLogin}>
        <div className={css["login__item"]}>
          <label className={css["login__label"]} htmlFor="email">
            Email
          </label>
          <br />
          <input
            name="email"
            value={formLogin.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className={css["login__item"]}>
          <label className={css["login__label"]} htmlFor="password">
            Password
          </label>
          <br />
          <input
            name="password"
            value={formLogin.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className={css["button-link"]}>
          <Link className={css["register-now"]} to={`/register`}>
            Register now?
          </Link>
          <button type="submit" className={css["login-button"]}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

{
  /* <form onSubmit={handleLogin}>
<input
  name="email"
  value={formLogin.email}
  onChange={handleChange}
  placeholder="email"
/>
<input
  name="password"
  onChange={handleChange}
  value={formLogin.password}
  placeholder="password"
/>

<button type="submit">Login</button>
</form> */
}
