import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}


const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c0bf320284e24580808fcf5e23123daf'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }

    get = (id: number | string) => { 
        return axiosInstance
            .get<T>(this.endpoint + '/' + id)
            .then(res => res.data)
    }

    getTrailer = (id: number | string) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint + '/' + id + '/movies')
            .then(res => res.data);
    }
    
}

export default APIClient;