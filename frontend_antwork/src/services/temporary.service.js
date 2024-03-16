import { httpClient } from "./httpClient";

const getAllTemporary = () => {
  return httpClient.get("Temporary/get");
};

export default {
  getAllTemporary,
};
