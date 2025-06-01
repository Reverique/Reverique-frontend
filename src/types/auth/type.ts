export interface LoginRequestTypes {
	email: string;
	password: string;
}

export interface LoginResponseTypes {
	accessToken: string;
	refreshToken: string;
}

export interface JoinRequestTypes {
	email: string;
	password: string;
	name: string;
	nickname: string;
	birthDate: string;
	gender: any;
	phoneNumber?: string;
	address?: string;
	code?: string;
}

export interface verifyEmailRequestTypes {
	email: string;
}

export interface verifyEmailCodeRequestTypes {
	email?: string;
	code: string;
}
