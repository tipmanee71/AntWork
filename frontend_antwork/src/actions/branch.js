import BranchService from "../services/branch.service.js";

export const updateBranchByBranchId = (idBranch, formData) => async () => {
  try {
    const res = await BranchService.updateBranchByBranchId(idBranch, formData);
    if (res) {
      return res;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.name) ||
      error.name ||
      error.toString();
    return "Error";
  }
};

export const deleteBranchByBranchId = (idBranch) => async () => {
  try {
    const res = await BranchService.deleteBranchByBranchId(idBranch);
    if (res) {
      return res;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.name) ||
      error.name ||
      error.toString();
    return "Error";
  }
}