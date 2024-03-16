import { httpClient } from "./httpClient";

const getUserProfile = () => {
  return httpClient.get(`profile`);
};

const getAllUsers = () => {
  return httpClient.get("users");
};

const registerAccount = (formData, type) => {
  return httpClient.post(`/users/newAccount/${type}`, formData);
};

export default {
  getUserProfile,
  getAllUsers,
  registerAccount,
};
