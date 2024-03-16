import { httpClient } from "./httpClient";

const getAllBank = () => {
    return httpClient.get(`banks`);
};

export default {
  getAllBank,
};