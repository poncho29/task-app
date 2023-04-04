import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const taskApi = axios.create({
  baseURL: VITE_API_URL
})

// Configurar interceptores

export default taskApi;