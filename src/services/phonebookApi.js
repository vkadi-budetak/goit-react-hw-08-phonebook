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
  setToken(data.token)
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
