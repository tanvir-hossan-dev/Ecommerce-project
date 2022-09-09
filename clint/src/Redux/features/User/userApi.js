import axios from "axios";

const signIn = async (email, password) => {
  const { data } = await axios.post("http://localhost:4000/api/v1/auth/login", { email, password });

  localStorage.setItem("user", JSON.stringify(data));
  return data;
};

const signUp = async (name, email, password) => {
  const { data } = await axios.post("http://localhost:4000/api/v1/auth/register", { name, email, password });

  return data;
};

const signOut = async () => {
  const { data } = await axios.get("http://localhost:4000/api/v1/auth/logout");
  console.log(data);
  return data;
};

export { signIn, signUp, signOut };
