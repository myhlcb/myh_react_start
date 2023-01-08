import axios from 'axios';
import { getToken } from './token';
const http = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 5000,
});
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export { http };
