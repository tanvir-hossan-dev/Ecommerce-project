import axios from "axios";

export const productApi = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/api/v1/products/${id}`);
  return data;
};
