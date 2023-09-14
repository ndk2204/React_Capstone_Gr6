import axios from "axios";
import { ACCESS_TOKEN } from "src/constants";
import { getLocalStorage } from "src/utils";

const BASE_URL = "https://shop.cyberlearn.vn/api";

//set up axios, tao ra 1 axios moi rut gon duong dan (.create)
//Khong yeu cau dang nhap
export const axiosWithoutAuth = axios.create({
  baseURL: BASE_URL,
  timeout: 180_000, // ms -> 3 phut, sau 3phut thi ngat ket noi
});

//Yeu cau dang nhap
export const axiosWithAuth = axios.create({
  baseURL: BASE_URL,
  timeout: 180_000, // ms -> 3 phut, sau 3phut thi ngat ket noi
});

// interceptor: đính kèm một vài thông tin trước khi gửi yêu cầu gì đó đi
axiosWithAuth.interceptors.request.use(
  (config) => {
    /**
     * config: là những setup thông tin của api đó
     */
    config.headers["Authorization"] = `Bearer ${getLocalStorage(ACCESS_TOKEN)}`;

    

    return config;
  },
  // dành cho call api thất bại
  (e) => {
    return Promise.reject(e);
  }
);
