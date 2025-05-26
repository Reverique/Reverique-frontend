import { api } from 'api';
import {
	JoinRequestTypes,
	LoginRequestTypes,
	LoginResponseTypes,
	verifyEmailCodeRequestTypes,
	verifyEmailRequestTypes,
} from 'types/auth/type';

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

// 회원가입
export const postJoin = async (requestData: JoinRequestTypes) => {
	const response = await api<any>('post', 200, '/users/signup', requestData);

	return response.data;
};

// 회원가입 이메일 인증
export const postVerifyEmail = async (requestData: verifyEmailRequestTypes) => {
	const response = await api<any>('post', 200, '/auth/email', requestData);

	return response.data;
};

// 회원가입 이메일 인증 코드 확인
export const postVerifyEmailCode = async (
	requestData: verifyEmailCodeRequestTypes,
) => {
	const response = await api<any>(
		'post',
		200,
		'/auth/verify-code',
		requestData,
	);

	return response.data;
};
