import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  //   config.baseURL = process.env.VITE_BASE_URL;

  const token = sessionStorage.getItem("token");
  config.headers.Authorization = "Bearer " + token;
  return config;
};
const onRequestError = (err: AxiosError): Promise<AxiosError> => {
  return Promise.reject(err);
};
axios.interceptors.request.use(onRequest, onRequestError);

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};
const onResponseError = (err: AxiosError): Promise<AxiosError> => {
  return Promise.reject(err.response);
};
axios.interceptors.response.use(onResponse, onResponseError);
