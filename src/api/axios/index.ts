import axios from 'axios';
import { localStorageHelper } from 'utils/localStorageHelper';

// axios setting
const instance = axios.create({
	baseURL: '/api',
});

// Add a request interceptor
instance.interceptors.request.use(
	(config: any) => {
		const accessToken = localStorageHelper('get', 'access_token');

		if (!config.headers.Authorization) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// Add a response interceptor
axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (!localStorageHelper('get', 'access_token')) {
			window?.location?.replace('/');
			return false;
		}

		return Promise.reject(error);
	},
);

export default instance;
