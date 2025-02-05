import { useQuery } from "@tanstack/react-query";
import useAxios from "../axios";

export interface Data {
  data: {
    banner_name: string;
    banner_image: string;
    description: string;
  }[];
}

export interface Banner {
  status: number;
  message: string;
  data: Data;
}

export const useBanner = () => {
  return useQuery<Banner>({
    queryKey: ["Banner"],
    queryFn: () => useAxios.get("/banner"),
  });
};
