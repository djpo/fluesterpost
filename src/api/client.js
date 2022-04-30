import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_JSONPLACEHOLDER_URL
});

export default apiClient;
