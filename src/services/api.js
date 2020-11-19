import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.ifome.net/',
});

export default api;




