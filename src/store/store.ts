import { TabBarIconTypes } from 'components/common/TabBar/interface';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { localStorageHelper } from 'utils/localStorageHelper';

const storage = {
	getItem: (key: string) => {
		return localStorageHelper('get', key);
	},
	setItem: (key: string, value: string) => {
		return localStorageHelper(
			'set',
			key,
			JSON.parse(value).userInfo ? JSON.parse(value).userInfo : value,
		);
	},
	removeItem: (key: string) => {
		return localStorageHelper('remove', key);
	},
};

const { persistAtom } = recoilPersist({
	key: 'access_token',
	storage,
});

export const userInfoState = atom<string | null>({
	key: 'userInfo',
	default: null,
	effects_UNSTABLE: [persistAtom],
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
