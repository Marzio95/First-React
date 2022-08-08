
import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';


export interface Httpcall {
    get<T = any, R = AxiosResponse<T>>(url:string, config?: AxiosRequestConfig) : Promise<any>; // un modo di tipizzazione
    post<T = any, R = AxiosResponse<T>>(url:string, data?: any, config?: AxiosRequestConfig) : Promise<any>;
    delete<T = any, R = AxiosResponse<T>>(url:string, config?: AxiosRequestConfig) : Promise<any>; 
    put<T = any, R = AxiosResponse<T>>(url:string, data?: any, config?: AxiosRequestConfig) : Promise<any>;
    patch<T = any, R = AxiosResponse<T>>(url:string, data?: any, config?: AxiosRequestConfig) : Promise<any>;
}

export const HttpBase: Httpcall = {
    get: (url, config) => axios.get(url, config),
    post: (url, data, config) => axios.post(url, data, config),
    put: (url, data, config) => axios.put(url, data, config),
    patch: (url, data, config) => axios.patch(url, data, config),
    delete: (url, config) => axios.delete(url, config)
}