import { useQuery } from "@tanstack/react-query";
import useAxios from "../axios";

export interface Data {
  data: {
    service_code: string;
    service_name: string;
    service_icon: string;
    service_tariff: number;
  }[];
}

export interface Service {
  status: number;
  message: string;
  data: Data;
}

export const useServices = () => {
  return useQuery<Service>({
    queryKey: ["services"],
    queryFn: () => useAxios.get("/services"),
  });
};
