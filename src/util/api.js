import axios from 'axios';
import * as Config from '../constants/Config';

export const callApi = (endpoint, method= 'GET', body = null) => {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        // url: 'http://localhost:3000/products',
        data: body
    }).catch((error) => {
        console.log(error);
    });
}

export const getAll = () => {
    return axios({
        method: 'GET',
        url: `${Config.API_URL}/products`,
        data: null
    }).catch((error) => {
        console.log(error);
    });
}

export const addNew = (body = null) => {
    return axios({
        method: 'POST',
        url: `${Config.API_URL}/products`,
        data: body
    }).catch((error) => {
        console.log(error);
    });
}

