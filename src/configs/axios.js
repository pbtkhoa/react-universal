import axios from "axios";
import { getToken } from "@src/utils/localStorage";

const headers = {
  "Content-Type": "application/json"
};

const instance = axios.create({
  baseURL: process.env.APP_RESOURCE_URL,
  responseType: "json",
  headers
});

// Interceptors for request
instance.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    // config.headers = { Authorization: `Token ${token}` };
  }
  return config;
});

// Interceptors for response
instance.interceptors.response.use(
  resp => resp.data,
  err => {
    return Promise.reject(err);
  }
);

export default instance;
