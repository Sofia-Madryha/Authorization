import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse
} from "axios";

import { appUrl } from "../constants";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const api = axios.create({
  baseURL: appUrl
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response.data;
  },
  async (error: AxiosError) => {
    return await Promise.reject(error);
  }
);

export default api;
