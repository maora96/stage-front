import { api } from ".";
import { Request } from "../types";

export const getOne = async (id: string) => {
  const { data } = await api.get(`/process/${id}`);

  return data.result;
};

export const getMany = async () => {
  const { data } = await api.get("/process");

  return data.result;
};

export const editSubprocesses = async (id: string, processesIds: string[]) => {
  return api.patch(`/process/subprocesses/${id}`, {
    processesIds,
  });
};

export const editProcess = async (id: string, request: Request) => {
  return api.patch(`/process/${id}`, {
    ...request,
  });
};

export const deleteProcess = async (id: string) => {
  return api.delete(`/process/${id}`);
};

export const createProcess = async (request: Request) => {
  return api.post("/process", {
    ...request,
  });
};

export const editDepartments = async (id: string, departmentsIds: string[]) => {
  return api.patch(`/process/departments/${id}`, {
    departmentsIds,
  });
};
