import axios from 'axios';

const phoneBookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  phoneBookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async FormData => {
  const { data } = await phoneBookInstance.post('/users/signup', FormData);
  setToken(data.token);
  return data;
};

export const requestLogin = async FormData => {
  const { data } = await phoneBookInstance.post('/users/login', FormData);
  setToken(data.token);
  return data;
};

export const requestLogout = async () => {
  const { data } = await phoneBookInstance.post('/users/logout');

  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await phoneBookInstance.get('/users/current');

  return data;
};

export const requestAllContacts = async () => {
  const { data } = await phoneBookInstance.get('/contacts');

  return data;
};

export const requestAddContact = async newContact => {
  const { data } = await phoneBookInstance.post('/contacts', newContact);

  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await phoneBookInstance.delete(`/contacts/${contactId}`);

  return data;
};
