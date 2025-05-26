export interface LoginRequestTypes {
	email: string;
	password: string;
}

export interface LoginResponseTypes {
	accessToken: 'string';
	refreshToken: 'string';
}
