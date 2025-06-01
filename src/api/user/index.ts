import { api } from 'api';
import { UserInfoResponseTypes } from 'types/user/type';

// 로그인한 user 정보 불러오기
export const getUser = async () => {
	const response = await api<UserInfoResponseTypes>('get', 200, '/users/me');

	return response.data;
};
