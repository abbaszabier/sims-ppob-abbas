import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../axios";
import { AxiosError } from "axios";

export interface TopupData {
  top_up_amount: number;
}

export const useTopup = () => {
  const queryClient = useQueryClient();
  const persistedState = localStorage.getItem("persist:auth")
    ? JSON.parse(localStorage.getItem("persist:auth") as string)
    : null;

  return useMutation({
    mutationFn: (data: TopupData) =>
      useAxios.post("/topup", data, {
        headers: {
          Authorization: `Bearer ${persistedState.token}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["balance"] });
    },

    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
};
