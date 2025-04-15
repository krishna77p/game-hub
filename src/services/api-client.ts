import axios from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c0bf320284e24580808fcf5e23123daf'
    }
})