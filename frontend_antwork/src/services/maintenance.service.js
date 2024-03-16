import { httpClient } from "./httpClient";

const addNewMaintenanceRequest = (formData) => {
  return httpClient.post(`maintenances/add`, formData, {'content-type': 'multipart/form-data'});
};

const getAllMyHistoryMaintenanceRequest = (query) => {
  return httpClient.get(`maintenances/getAllHistory`, { params: query });
};

const getAllMaintenanceRequest = (query) => {
  return httpClient.get(`maintenances/getAllMaintenanceRequest`, { params: query });
};

const getMaintenanceDesc = (maintenanceId) => {
  return httpClient.get(`maintenances/getMaintenanceDesc/${maintenanceId}`);
};

const putChangeStatus = (body) => {
  return httpClient.put(`maintenances/putChangeStatus`, body);
};

const newProgressReport = (body) => {
  return httpClient.post(`maintenances/newProgressReport`, body);
};

const getAllTechnicians = (query) => {
	return httpClient.get(`maintenances/getAllTechnicians`, { params: query });
}

const addTechnician = (formData) => {
	return httpClient.post(`maintenances/addTechinician`, formData, {'content-type': 'multipart/form-data'});
}

export default {
	addNewMaintenanceRequest,
	getAllMyHistoryMaintenanceRequest,
	getAllMaintenanceRequest,
	getMaintenanceDesc,
	putChangeStatus,
	newProgressReport,
	getAllTechnicians,
	addTechnician
}