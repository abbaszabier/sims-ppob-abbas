import { useMutation } from "@tanstack/react-query";
import useAxios from "../axios";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export interface RegistrasiData {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const useRegistrasi = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegistrasiData) => useAxios.post("/registration", data),
    onSuccess: () => {
      toast.success("Registrasi berhasil!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    },

    onError: (error: AxiosError) => {
      const err = (error?.response?.data as { message: string })?.message;

      toast.error(err, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginData) => useAxios.post("/login", data),
    onSuccess: () => {
      toast.success("Login berhasil!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard");
    },

    onError: (error: AxiosError) => {
      const err = (error?.response?.data as { message: string })?.message;

      toast.error(err, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
};
