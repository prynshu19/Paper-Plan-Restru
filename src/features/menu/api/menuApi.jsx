import { api } from "../../../config/axiosInstance";

export const getProducts = async () => {
  const response = await api.get(`recipes?limit=${50}`);
  console.log(response.data.recipes);
};
