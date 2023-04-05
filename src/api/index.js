import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const taskApi = axios.create({
  baseURL: VITE_API_URL
})

// Configurar interceptores
taskApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    'token': localStorage.getItem('tokenTask')
  }

  return config;
})

export default taskApi;