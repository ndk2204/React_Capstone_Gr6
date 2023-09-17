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
     * dành cho call api thành công
     * config: là những setup thông tin của api đó
     */
    config.headers["Authorization"] = `Bearer ${getLocalStorage(ACCESS_TOKEN)}`;

    config.headers[
      "TOKEN_CYBER_SOFT"
    ] = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MDA4IiwiSGV0SGFuU3RyaW5nIjoiMjgvMDEvMjAyNCIsIkhldEhhblRpbWUiOiIxNzA2NDAwMDAwMDAwIiwibmJmIjoxNjc3NDMwODAwLCJleHAiOjE3MDY1NDc2MDB9.eo3y0MmcjE8Jl4fRzUJLBoZzylEeFDcUTfWXvtb1hdc`;

    return config;
  },
  // dành cho call api thất bại
  (e) => {
    return Promise.reject(e);
  }
);
