import { useQuery } from "react-query";
import { getMany, getOne } from "../api/processes";

export const useGetProcess = (id: string) => {
    return useQuery("getProcess", async () => getOne(id), {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    });
};

export const useGetManyProcesses = () => {
    return useQuery("getAllProcess", async () => getMany(), {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    });
};