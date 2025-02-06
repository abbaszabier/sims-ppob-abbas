import { useQuery } from "@tanstack/react-query";
import useAxios from "../axios";

export interface Record {
  invoice_number: string;
  transaction_type: string;
  description: string;
  total_amount: number;
  created_on: string;
}

export interface Data {
  data: {
    offset: number;
    limit: number;
    records: Record[];
  };
}

export interface History {
  status: number;
  message: string;
  data: Data;
}

export const useHistory = (offset: number, limit: number) => {
  const persistedState = localStorage.getItem("persist:auth")
    ? JSON.parse(localStorage.getItem("persist:auth") as string)
    : null;

  return useQuery<History>({
    queryKey: ["history", offset, limit],
    queryFn: () =>
      useAxios.get("/transaction/history", {
        params: { offset, limit },
        headers: {
          Authorization: `Bearer ${persistedState.token}`,
        },
      }),
  });
};
