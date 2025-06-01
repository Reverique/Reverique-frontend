import { TabBarIconTypes } from 'components/common/TabBar/interface';
import { atom } from 'recoil';
import { UserInfoResponseTypes } from 'types/user/type';

export const accessTokenState = atom<null | string>({
	key: 'accessToken',
	default: null,
});

export const userInfoState = atom<UserInfoResponseTypes | null>({
	key: 'userInfo',
	default: null,
});

export const tabBarIconState = atom<TabBarIconTypes[]>({
	key: 'tabBarIcon',
	default: [],
});

export const loadingState = atom<boolean>({
	key: 'loading',
	default: false,
});

export const questionDetailState = atom<number | null>({
	key: 'questionDetail',
	default: null,
});

export const verifyEmailState = atom<string>({
	key: 'verifyEmail',
	default: '',
});
