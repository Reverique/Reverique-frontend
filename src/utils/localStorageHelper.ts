type localStorageHelperType = 'get' | 'set' | 'remove';

// 로컬 스토리지 관련 함수
export const localStorageHelper = (
	type: localStorageHelperType,
	key: string,
	value?: any,
) => {
	if (type === 'get') {
		const getData = window.localStorage.getItem(key);

		if (getData !== null) {
			try {
				return JSON.parse(getData);
			} catch {
				return getData;
			}
		}
		return null;
	}

	if (type === 'set') {
		return window.localStorage.setItem(key, JSON.stringify(value));
	}

	if (type === 'remove') {
		return window.localStorage.removeItem(key);
	}
};
