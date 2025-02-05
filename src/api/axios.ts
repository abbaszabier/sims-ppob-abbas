import axios from "axios";

const Axios = axios.create({
  baseURL: "https://take-home-test-api.nutech-integrasi.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export default Axios;
