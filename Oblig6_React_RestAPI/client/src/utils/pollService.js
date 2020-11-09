import http from './http';

//Kan hende du må ta /poll her hvis alt blir facked eller endre tilbake utils til event(s)Service.js
const API_URL = '/polls';

export const list = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response.data;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response.data;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (err) {
    return err.response.data;
  }
};

export const update = async (id, data) => {
  try {
    return await http.patch(`${API_URL}/${id}`, data);
  } catch (err) {
    return err.response.data;
  }
};

export default {
  create,
  list,
  get,
};
