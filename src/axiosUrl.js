import axios from 'axios';

const instance = axios.create({
    baseURL:"http://localhost:8081/"  // SET your Backend HOST URL
});

export default instance;
