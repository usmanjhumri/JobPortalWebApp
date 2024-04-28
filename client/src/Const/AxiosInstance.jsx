import axios from "axios";
let type = "local";
const BaseUrl =
  type === "test" ? "" : type === "local" ? "http://localhost:8000/" : "";
const axiosInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${cookies.get("token")}`,
  },
});

// some way of changing it
// export const setToken = (newLocale) => {
//   token = newLocale;
// };

// register a synchronous request interceptor
axiosInstance.interceptors.request.use(
  (config) => ({
    ...config,
    headers: {
      ...config.headers,
      // Authorization: `Bearer ${cookies.get("token")}`,
    },
  }),
  null,
  { synchronous: true }
);

export default axiosInstance;
