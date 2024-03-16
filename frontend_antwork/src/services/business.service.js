import { httpClient } from "./httpClient";

const getAllBusinessGroup = () => {
    return httpClient.get("business-group");
};

export default {
    getAllBusinessGroup
};