import { httpClient } from "./httpClient";

const getAllWork = () => {
  return httpClient.get("work/getAll");
};


export default {
  getAllWork,
};
