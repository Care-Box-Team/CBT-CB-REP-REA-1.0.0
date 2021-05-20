import axios from "axios";
const baseUrl = "http://192.168.1.20:8080/";

export const http = axios.create({ baseURL: baseUrl });
