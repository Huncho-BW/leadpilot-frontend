import axios from "axios";

// Shared HTTP client for requests from Next.js to Express.
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
