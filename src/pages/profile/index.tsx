import React, { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "src/services/user.service";
import css from "./profile.module.scss";
import * as Y from "yup";
import { useFormik } from "formik";
import { TParamsRegister } from "../register";

const profileSchema = Y.object({
  email: Y.string()
    .email()
    .required("Email không được để trống")
    .email("Email không hợp lệ"),
  // .nullable(),
  userName: Y.string()
    .min(5, "User name phải lớn hơn 5 ký tự.")
    .max(20, "User name phải nhỏ hơn 20 ký tự.")
    .required("Bắt buộc nhập vào user name."),
  // .nullable(),
  password: Y.string()
    .min(5, "Password phải lớn hơn 5 ký tự.")
    .max(20, "Password phải nhỏ hơn 20 ký tự.")
    .required("Bắt buộc nhập vào password."),
  // .nullable(),
  phone: Y.string()
    .min(10, "Số điện thoại phải lớn hơn 10 số.")
    .max(11, "Số điện thoại phải nhỏ hơn 11 số.")
    .required("Bắt buộc nhập vào số điện thoại."),
  // .nullable(),
  // gender: Y.boolean().required("Bắt buộc chọn giới tính.").nullable(),
});

function Profile() {
  const [profile, setProfile] = useState<any>();
  // console.log(profile);

  useEffect(() => {
    (async () => {
      const resp = await getUserProfile();
      setProfile(resp.content);
    })();
  }, []);

  const formik: any = useFormik({
    initialValues: {
      email: profile?.email,
      userName: profile?.name,
      password: "",
      phone: profile?.phone,
      gender: "",
    },

    validationSchema: profileSchema,

    onSubmit: (value) => {
      const data: TParamsRegister = {
        email: value.email,
        name: value.userName,
        password: value.password,
        phone: value.phone,
        gender: value.gender === "true" ? true : false,
      };

      // console.log(data);

      updateProfile(data)
        .then((resp) => {
          alert("Cập nhật thành công");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  return (
    <div className={css["container"]}>
      <h3 className={css["profile__text"]}>Profile</h3>
      <div>
        <div>
          <div className={css["profile__rowbig"]}>
            <div className={css["profile__col-4"]}>
              <img className={css["profile__img"]} src={profile?.avatar} />
            </div>
            <div className={css["profile__col-8"]}>
              <form
                className={css["profile__form"]}
                onSubmit={formik.handleSubmit}
              >
                <div className={css["profile__row"]}>
                  <div className={css["profile__col-6"]}>
                    <div className={css["profile__item"]}>
                      <label className={css["profile__label"]} htmlFor="email">
                        Email
                      </label>
                      <br />
                      <input
                        className={css["profile__input"]}
                        placeholder="Email"
                        {...formik.getFieldProps("email")}
                      />
                      {/* {formik.touched.email && formik.errors.email && (
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
                      )} */}
                    </div>
                    <div className={css["profile__item"]}>
                      <label className={css["profile__label"]} htmlFor="phone">
                        Phone
                      </label>
                      <br />
                      <input
                        className={css["profile__input"]}
                        placeholder="Phone"
                        {...formik.getFieldProps("phone")}
                      />
                      {/* {formik.touch.phone && formik.errors.email && (
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
                      )} */}
                    </div>
                  </div>
                  <div className={css["profile__col-6"]}>
                    <div className={css["profile__item"]}>
                      <label className={css["profile__label"]} htmlFor="name">
                        Name
                      </label>
                      <br />
                      <input
                        className={css["profile__input"]}
                        placeholder="Name"
                        {...formik.getFieldProps("name")}
                      />
                    </div>
                    <div className={css["profile__item"]}>
                      <label
                        className={css["profile__label"]}
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <br />
                      <input
                        className={css["profile__input"]}
                        placeholder="Password"
                        {...formik.getFieldProps("password")}
                      />
                    </div>
                    <div className={css["profile__gender"]}>
                      <div className={css["gender__row"]}>
                        <label className={css["profile__label"]}>Gender</label>
                        <ul className={css["profile-ul"]}>
                          <li className={css["profile-male"]}>
                            <input
                              type="radio"
                              className={css["profile-choice"]}
                              {...formik.getFieldProps("gender")}
                            />
                            <label htmlFor="male">Male</label>
                          </li>
                          <li className={css["profile-female"]}>
                            <input
                              type="radio"
                              className={css["profile-choice"]}
                              {...formik.getFieldProps("gender")}
                            />
                            <label htmlFor="female">Female</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button type="submit" className={css["profile-button"]}>
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className={css["profile__hr"]} />
        <div>
          <ul>
            <li className={css["profile__li"]}>
              <a className={css["profile__a1"]} href="#">
                Order history
              </a>
            </li>
            <li className={css["profile__li"]}>
              <a href="#">Favourite</a>
            </li>
          </ul>
        </div>
        <div className={css["profile__cart"]}>
          <p className={css["profile__title"]}>
            + Orders have been placed on 09 - 19 - 2020
          </p>
          <table className={css["profile__table"]}>
            <thead>
              <tr>
                <th>Id</th>
                <th>image</th>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img
                    style={{ width: 100 }}
                    src="src/assets/imgs/carousel/h1.png"
                    alt="..."
                  />
                </td>
                <td>Product 1</td>
                <td>1000</td>
                <td>1</td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={css["profile__cart"]}>
          <p className={css["profile__title"]}>
            + Orders have been placed on 09 - 19 - 2020
          </p>
          <table className={css["profile__table"]}>
            <thead>
              <tr>
                <th>Id</th>
                <th>image</th>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img
                    style={{ width: 100 }}
                    src="src/assets/imgs/carousel/h2.png"
                    alt="..."
                  />
                </td>
                <td>Product 1</td>
                <td>1000</td>
                <td>1</td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
