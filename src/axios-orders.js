import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-44ff8.firebaseio.com/'
});

export default instance;