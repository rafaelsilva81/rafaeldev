import axios from 'axios';

const api = axios.create({
  baseURL: process.env.STRAPI_API_URL || 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
