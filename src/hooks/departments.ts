import { useQuery } from "react-query";
import { getMany, getManyByDepartment } from "../api/departments";

export const useGetMany = () => {
  return useQuery("getAllDepartments", async () => getMany(), {
    staleTime: 5000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export const useGetManyByDepartment = (id: string) => {
    console.log('hi')
    return useQuery("getManyByDepartment", async () => getManyByDepartment(id), {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    });
  };