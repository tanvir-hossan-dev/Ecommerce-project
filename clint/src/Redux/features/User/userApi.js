import axios from "axios";

const getUser = async (email, password) => {
  const { data } = await axios.post("http://localhost:4000/api/v1/auth/login", { email, password });
  return data;
};

export default getUser;
