import { instanceToken, instance } from '../utils/instance';
import { readFromStorage } from '../../../utils/helpers/localStorageOperation';
import LocalStorage from '../../../constants/localStorag';

const { AUTH_TOKEN } = LocalStorage;

export const useInterceptor = () => {
  instance.interceptors.request.use((config) => config);
  instanceToken.interceptors.request.use((config) => {
    const token = readFromStorage(AUTH_TOKEN);

    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
