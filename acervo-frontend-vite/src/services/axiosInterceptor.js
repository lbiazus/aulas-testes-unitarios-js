import axios from 'axios';

const createAxiosInterceptor = () => {
	/*axios.defaults.headers.post['Content-Type'] = 'application/json';
	axios.defaults.headers['Cache-control'] = 'no-cache';
	axios.defaults.headers['Pragma'] = 'no-cache';
	axios.defaults.headers['Expires'] = 0;*/

	let errorHandler = error => Promise.reject(error);

	axios.interceptors.request.use(config => {
        const token = sessionStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
		return config;
	}, errorHandler);
};

export default createAxiosInterceptor;