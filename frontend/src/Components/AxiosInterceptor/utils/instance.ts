import axios from 'axios';

const evn = {
  isDEV: process.env.NODE_ENV === 'development',
  dev: process.env.REACT_APP_DEV_BASE_URL,
  prod: process.env.REACT_APP_PROD_BASE_URL,
};

const baseURL = {
  baseURL: evn.isDEV ? evn.dev : evn.prod,
};

const instance = axios.create(baseURL);
const instanceToken = axios.create(baseURL);

export { instance, instanceToken };
