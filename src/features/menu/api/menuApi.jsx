import { api } from "../../../config/axiosInstance";

export const getProducts = async (limit, page) => {
  const response = await api.get(`recipes?limit=${limit}&skip=${page * limit}`);
  return response.data;
};
