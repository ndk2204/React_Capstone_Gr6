import React from "react";
import css from "./register.module.scss";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { signup } from "src/services/user.service";
import * as Y from "yup";

const registerSchema = Y.object({
  email: Y.string().email().required("Email không được để trống"),
  userName: Y.string()
    .min(5, "User name phải lớn hơn 5 ký tự.")
    .max(20, "User name phải nhỏ hơn 20 ký tự.")
    .required("Bắt buộc nhập vào user name."),
  password: Y.string()
    .min(5, "Password phải lớn hơn 5 ký tự.")
    .max(20, "Password phải nhỏ hơn 20 ký tự.")
    .required("Bắt buộc nhập vào password."),
  confirmPassword: Y.string()
    .oneOf([Y.ref("password")], "Passwords must match")
    .required("Bắt buộc nhập vào Confirm password."),
  phone: Y.string()
    .min(10, "Phone không thấp hơn 10 số.")
    .max(11, "Phone không cao hơn 11 số.")
    .required("Phone không được để trống."),
});

export type TParamsRegister = {
  email: string;
  name: string;
  password: string;
  phone: string;
  gender: boolean;
};

function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },

    validationSchema: registerSchema,

    onSubmit: (value) => {
      const data: TParamsRegister = {
        email: value.email,
        name: value.userName,
        password: value.password,
        phone: value.phone,
        gender: true,
      };

      signup(data)
        .then(() => {
          navigate("/login");
        })
        .catch(() => {
          alert("Error");
        });
    },
  });

  return (
    <div className={css["container"]}>
      <h2 className={css["register__text"]}>Register</h2>
      <hr></hr>
      <form className={css["register__form"]} onSubmit={formik.handleSubmit}>
        <div className={css["register__row"]}>
          <div className={css["register__col"]}>
            <div className={css["register__item"]}>
              <label className={css["register__label"]} htmlFor="email">
                Email
              </label>
              <br />
              <input
                className={css["register__input"]}
                id="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p
                  style={{
                    color: "#F50E0E",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    lineHeight: "1.6rem",
                    textAlign: "left",
                  }}
                >
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className={css["register__item"]}>
              <label className={css["register__label"]} htmlFor="password">
                Password
              </label>
              <br />
              <input
                className={css["register__input"]}
                id="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <p
                  style={{
                    color: "#F50E0E",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    lineHeight: "1.6rem",
                    textAlign: "left",
                  }}
                >
                  {formik.errors.password}
                </p>
              )}
            </div>
            <div className={css["register__item"]}>
              <label
                className={css["register__label"]}
                htmlFor="password-confirm"
              >
                Password confirm
              </label>
              <br />
              <input
                className={css["register__input"]}
                id="password-confirm"
                placeholder="Confirm Password"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p
                    style={{
                      color: "#F50E0E",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      lineHeight: "1.6rem",
                      textAlign: "left",
                    }}
                  >
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
          </div>
          <div className={css["register__col"]}>
            <div className={css["register__item"]}>
              <label className={css["register__label"]} htmlFor="name">
                Name
              </label>
              <br />
              <input
                className={css["register__input"]}
                id="name"
                placeholder="User name"
                {...formik.getFieldProps("userName")}
              />
              {formik.touched.userName && formik.errors.userName && (
                <p
                  style={{
                    color: "#F50E0E",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    lineHeight: "1.6rem",
                    textAlign: "left",
                  }}
                >
                  {formik.errors.userName}
                </p>
              )}
            </div>
            <div className={css["register__item"]}>
              <label className={css["register__label"]} htmlFor="phone">
                Phone
              </label>
              <br />
              <input
                className={css["register__input"]}
                id="phone"
                placeholder="Phone"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p
                  style={{
                    color: "#F50E0E",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    lineHeight: "1.6rem",
                    textAlign: "left",
                  }}
                >
                  {formik.errors.phone}
                </p>
              )}
            </div>
            <div className={css["register__gender"]}>
              <div className={css["gender__row"]}>
                <label className={css["register__label"]}>Gender</label>
                <ul className={css["register-ul"]}>
                  <li className={css["register-male"]}>
                    <input
                      type="radio"
                      className={css["register-choice"]}
                      {...formik.getFieldProps("gender")}
                    />
                    <label htmlFor="male">Male</label>
                  </li>
                  <li className={css["register-female"]}>
                    <input
                      type="radio"
                      className={css["register-choice"]}
                      {...formik.getFieldProps("gender")}
                    />
                    <label htmlFor="female">Female</label>
                  </li>
                </ul>
              </div>
            </div>
            <button type="submit" className={css["register-button"]}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
