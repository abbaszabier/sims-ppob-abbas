import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export interface Data {
  data: {
    email: string;
    first_name: string;
    last_name: string;
    profile_image: string;
  };
}

export interface Profile {
  status: number;
  message: string;
  data: Data;
}

export const useProfile = () => {
  const persistedState = localStorage.getItem("persist:auth")
    ? JSON.parse(localStorage.getItem("persist:auth") as string)
    : null;

  return useQuery<Profile>({
    queryKey: ["profile"],
    queryFn: () =>
      useAxios.get("/profile", {
        headers: {
          Authorization: `Bearer ${persistedState.token}`,
        },
      }),
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const persistedState = localStorage.getItem("persist:auth")
    ? JSON.parse(localStorage.getItem("persist:auth") as string)
    : null;

  return useMutation({
    mutationFn: (data: FormData) =>
      useAxios.put("/profile/update", data, {
        headers: {
          Authorization: `Bearer ${persistedState.token}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success("Profile berhasil diupdate!", {
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
    onError: (error: AxiosError) => {
      console.log(error);
      toast.error("Profile gagal diupdate!", {
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

export const useUpdateProfileImage = () => {
  const queryClient = useQueryClient();
  const persistedState = localStorage.getItem("persist:auth")
    ? JSON.parse(localStorage.getItem("persist:auth") as string)
    : null;

  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      return useAxios.put("/profile/image", formData, {
        headers: {
          Authorization: `Bearer ${persistedState?.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success("Profile image berhasil diupdate!", {
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
    onError: (error: AxiosError) => {
      console.log(error);
      toast.error("Profile image gagal diupdate!", {
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
