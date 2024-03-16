import { httpClient } from "./httpClient";

const getCompanysingup = () => {
  return httpClient.get("company/sinup");
};
const getCompanyManage = () => {
  return httpClient.get("company/manage");
};
const addCompanyLogo = (formData) => {
  return httpClient.post(`company/manage/logo`, formData);
};

const deleteCompanyLogo = () => {
  return httpClient.delete(`company/manage/logo`);
};

const updateCompanyManage = (formData) => {
  return httpClient.patch(`companies/manage`, formData);
};

const updateCompanyManageBankDetail = (formData) => {
  return httpClient.patch(`companies/manage/bankdetail`, formData);
};

const generatorTokenChildsCompany = () => {
  return httpClient.get(`company/generator-token-childs-company`);
};

const addCompanyManageBranch = (formData) => {
  return httpClient.post(`companies/manage/branch`, formData);
};

export default {
  getCompanysingup,
  getCompanyManage,
  addCompanyLogo,
  deleteCompanyLogo,
  updateCompanyManage,
  updateCompanyManageBankDetail,
  generatorTokenChildsCompany,
  addCompanyManageBranch,

};
