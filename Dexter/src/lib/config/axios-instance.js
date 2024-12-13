import axios from "axios";
import { API_URL } from "../../constants";

// public endpoints
export const publicApi = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: API_URL,
});

// protected endpoints

export const authApi = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: API_URL,
});

authApi.interceptors.request.use(async (config) => {
  // get access token from storage
  const accessToken = localStorage.getItem("accessToken") || "";
  // console.log({accessToken});

  // const refreshToken = localStorage.getItem("refresh_token") ?? "";
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  // config.headers["X-refresh"] = `${refreshToken}`;

  return config;
});

// authApi.interceptors.response.use(({ headers }) => {
//   const newAccessToken = headers["x-access-token"];
//   if (newAccessToken) localStorage.setItem("access_token", newAccessToken);
// });
