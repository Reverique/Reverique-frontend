import instance from 'api/axios';
import { ApiMethodsType } from 'types/type';

const constants = {
	// api 호출 메소드
	API_METHODS: {
		get: ({ url, data }: ApiMethodsType) => instance.get(url, { params: data }),
		post: ({ url, data }: ApiMethodsType) => instance.post(url, data),
		put: ({ url, data }: ApiMethodsType) => instance.put(url, data),
		patch: ({ url, data }: ApiMethodsType) => instance.patch(url, data),
		delete: ({ url, data }: ApiMethodsType) => instance.delete(url, { data }),
	},
};

export default constants;
