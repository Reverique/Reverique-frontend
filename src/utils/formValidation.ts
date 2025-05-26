// id, name 등 유효성 검사 함수
export const textValidation = (value: string) => {
	return value.length !== 0;
};

// 이메일 유효성 검사 함수
export const emailValidation = (value: string) => {
	const regExp =
		/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return regExp.test(value);
};

// 패스워드 유효성 검사 함수
export const passwordValidation = (value: string) => {
	const regExp =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

	return regExp.test(value);
};
