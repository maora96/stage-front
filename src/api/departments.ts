import { api } from ".";

export const getMany = async () => {
  const { data } = await api.get("/department");

  return data.result;
};

export const getManyByDepartment = async (id: string) => {
    const { data } = await api.get(`/department/${id}`);
  
    return data.result;
  };