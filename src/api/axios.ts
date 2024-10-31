import axios, { AxiosInstance } from "axios";

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.thedogapi.com/v1/images/search?";

const $api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  params: {
    api_key: API_KEY,
    order: "RAND",
    limit: 8,
    has_breeds: true,
  },
});

export default $api;
