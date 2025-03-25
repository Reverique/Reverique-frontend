import constants from 'constants/index';

type apiType = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface ApiResponse<T> {
	status: number;
	data: T;
}

// api 호출 함수
export const api = <T>(
	type: apiType,
	status: number,
	url: string,
	data?: string | any[] | Record<string, any> | undefined,
	headers: Record<string, string> = { 'Content-Type': 'application/json' },
): Promise<ApiResponse<T>> => {
	const methods = constants.API_METHODS;

	return new Promise((resolve, reject) => {
		const method = methods[type];

		if (!method) {
			reject(new Error('Invalid API type'));
			return;
		}

		method({ url, data, headers })
			.then((res) => {
				if (res.status === 404) {
					// 404 에러 페이지 렌더링
					window.location.replace('/404');
				} else if (res.status === 500) {
					// 500 에러 페이지 렌더링
					window.location.replace('/500');
				} else if (res.status !== status) {
					reject(res);
				} else {
					resolve(res);
				}
			})
			.catch((err) => {
				reject(err);
				console.log('err', err);
			});
	});
};
