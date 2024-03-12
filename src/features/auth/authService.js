import axios from "axios";
const API_URL = "/api/user";

const register = async (formdata) => {
  const response = await axios.post(API_URL + "/register", formdata);

  localStorage.setItem("person", JSON.stringify(response.data));

  return response.data;
};

const login = async (formdata) => {
  const response = await axios.post(API_URL + "/login", formdata);
  localStorage.setItem("person", JSON.stringify(response.data));
  return response.data;
};
const authService = {
  register,
  login,
};
export default authService;
