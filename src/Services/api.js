
import axios from "axios";

// =========================================
// CREATE AXIOS INSTANCE
// =========================================
const api = axios.create({
  baseURL: "http://localhost/travelApi/api/",
  timeout: 10000,
});

// =========================================
// REQUEST INTERCEPTOR
// Attach customer token automatically
// =========================================
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("customer_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// =========================================
// RESPONSE INTERCEPTOR
// Global error handling
// =========================================
api.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;