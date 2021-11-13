import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { ApiRoute } from 'const';
import { getToken } from './token';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

enum HttpCode {
  Unauthorized = 401,
  ServerError = 500,
}

type CreateApi = (params: {
  onAuthError: () => void,
  onServerError: () => void,
}) => AxiosInstance

export const createAPI: CreateApi = ({ onAuthError, onServerError }) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { response } = error;
      if (
        response?.status === HttpCode.Unauthorized
        && response.config.url !== ApiRoute.LogIn
      ) {
        onAuthError();
      }
      if (!response || response?.status >= HttpCode.ServerError) {
        onServerError();
      }
      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};


