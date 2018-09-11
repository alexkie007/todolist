import axios from 'axios';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

export const sendRequest = (method, url, data={}) => {
    let config = { url, method, data };
    const token = localStorage.token;
    if (token)
        config.headers = { 'Authorization': `Token ${token}` };
    return axios.request(config);
}