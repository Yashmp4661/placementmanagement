import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8089/certificates', // Spring Boot API endpoint
});

export default api;