import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c0bf320284e24580808fcf5e23123daf'
    }
})