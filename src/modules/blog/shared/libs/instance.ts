import axios, { AxiosError, AxiosResponse } from "axios";

import { appUrl } from "../constants";

const api = axios.create({
  baseURL: appUrl
});

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response.data;
  },
  async (error: AxiosError) => {
    return await Promise.reject(error);
  }
);

export default api;
