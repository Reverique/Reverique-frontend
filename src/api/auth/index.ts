import { api } from 'api';
import { LoginRequestTypes, LoginResponseTypes } from 'types/auth/type';

// 로그인
export const postLogin = async (requestData: LoginRequestTypes) => {
	const response = await api<LoginResponseTypes>(
		'post',
		200,
		'/auth/login',
		requestData,
	);

	return response.data;
};
