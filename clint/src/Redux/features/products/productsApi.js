import axios from "axios";

export const getAllProductsApi = async () => {
  const { data } = await axios.get("http://localhost:4000/api/v1/products");

  return data;
};
