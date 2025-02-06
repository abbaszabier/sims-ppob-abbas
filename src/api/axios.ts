import axios from "axios";
import { store } from "../store/store";
import { logout } from "../features/auth/auth-slice";
import { toast } from "react-toastify";

const Axios = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: "https://take-home-test-api.nutech-integrasi.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

Axios.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(logout());
      toast.error("Sesi telah berakhir, silahkan login kembali", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default Axios;
