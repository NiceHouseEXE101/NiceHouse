// src/api/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Base URL from environment variables
  headers: {
    "Content-Type": "application/json",
    // Add any authorization headers if needed
  },
});

export default axiosInstance;
