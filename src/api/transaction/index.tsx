import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../axios";
import { AxiosError } from "axios";

export interface TransactionData {
  service_code: string;
}

export const useTransaction = () => {
  const queryClient = useQueryClient();
  const persistedState = localStorage.getItem("persist:auth")
    ? JSON.parse(localStorage.getItem("persist:auth") as string)
    : null;

  return useMutation({
    mutationFn: (data: TransactionData) =>
      useAxios.post("/transaction", data, {
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
