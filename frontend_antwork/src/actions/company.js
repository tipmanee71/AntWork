import {
  COMPANYSINGUP_FETCHING,
  COMPANYSINGUP_FAILED,
  COMPANYSINGUP_SUCCESS,

  COMPANY_MANAGE_FETCHING,
  COMPANY_MANAGE_FAILED,
  COMPANY_MANAGE_SUCCESS,

  COMPANYS_FETCHING,
  COMPANYS_FAILED,
  COMPANYS_SUCCESS,
} from "./types";

import CompanyService from "../services/company.service";

export const getCompanysingup = () => async (dispatch) => {
  try {
    dispatch({
      type: COMPANYSINGUP_FETCHING,
    });
    const res = await CompanyService.getCompanysingup();
    if (res) {
      dispatch({
        type: COMPANYSINGUP_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: COMPANYSINGUP_FAILED,
    });
    console.log(err);
  }
};
export const getCompanyManage = () => async (dispatch) => {
  try {
      dispatch({
          type: COMPANY_MANAGE_FETCHING
      });
      const res = await CompanyService.getCompanyManage();
      if (res) {
          dispatch({
              type: COMPANY_MANAGE_SUCCESS,
              payload: res.data
          });
      }
  } catch (error) {
      dispatch({
          type: COMPANY_MANAGE_FAILED
      });
  }
};
export const addCompanyLogo = (formData) => async () => {
  try {
    const res = await CompanyService.addCompanyLogo(formData);
    if (res) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

export const deleteCompanyLogo = () => async () => {
  try {
    const res = await CompanyService.deleteCompanyLogo();
    if (res) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};
export const updateCompanyManage = (formData) => async () => {
  try {
    const res = await CompanyService.updateCompanyManage(formData);
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

export const updateCompanyManageBankDetail= (formData) => async () => {
  try {
    const res = await CompanyService.updateCompanyManageBankDetail(formData);
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
export const generatorTokenChildsCompany = () => async () => {
  try {
    const res = await CompanyService.generatorTokenChildsCompany();
    if (res) {
      return res;
    }
  } catch (error) {
    return "Error";
  }
};

export const addCompanyManageBranch = (formData) => async () => {
  try {
    const res = await CompanyService.addCompanyManageBranch(formData);
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

