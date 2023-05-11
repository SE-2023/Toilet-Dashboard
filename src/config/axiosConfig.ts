import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = API_URL;

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
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
    return Promise.reject(err);
};
axios.interceptors.response.use(onResponse, onResponseError);

