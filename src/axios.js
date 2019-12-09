import axios from 'axios';

const instance = axios.create({
    baseURL:'https://varmakauppa.fi:5000/api/'
});

export default instance;