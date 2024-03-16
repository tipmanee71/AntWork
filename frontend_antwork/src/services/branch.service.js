import { httpClient } from "./httpClient";

const updateBranchByBranchId = (idBranch, formData) => {
    return httpClient.patch(`branches/${idBranch}`, formData);
};

const deleteBranchByBranchId = (idBranch) => {
    return httpClient.delete(`branches/${idBranch}`);
};

export default {
  updateBranchByBranchId,
  deleteBranchByBranchId,
};