import axios from 'axios';

const responseHandler = response => {
    if (response.status === 200) return response.data;
    return Promise.reject({ status: response.status, statusText: response.statusText });
};

const errorHandler = error => {
    throw new Error(`${error.status || 500} - ${error.statusText || error.message}\nThe requested operation could not be completed.`);
};

class BaseApi {
    static get(url, params) {
        return axios.get(url, { params })
            .then(responseHandler)
            .catch(errorHandler);
    }

    static post(url, payload) {
        return axios.post(url, payload)
            .then(responseHandler)
            .catch(errorHandler);
    }
}

export default BaseApi;