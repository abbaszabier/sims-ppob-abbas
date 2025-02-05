import { useQuery } from "@tanstack/react-query";
import useAxios from "../axios";

export interface Data {
  data: {
    balance: number;
  };
}

export interface Balance {
  status: number;
  message: string;
  data: Data;
}

export const useBalance = () => {
  const persistedState = localStorage.getItem("persist:auth")
    ? JSON.parse(localStorage.getItem("persist:auth") as string)
    : null;

  return useQuery<Balance>({
    queryKey: ["balance"],
    queryFn: () =>
      useAxios.get("/balance", {
        headers: {
          Authorization: `Bearer ${persistedState.token}`,
        },
      }),
  });
};
