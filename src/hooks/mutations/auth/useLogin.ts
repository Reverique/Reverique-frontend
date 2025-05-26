import { useMutation } from '@tanstack/react-query';
import { postLogin } from 'api/auth';

export const useLogin = (onSuccessCallback?: (token: string) => void) => {
	return useMutation<unknown, Error, { email: string; password: string }>({
		mutationFn: ({ email, password }) => postLogin({ email, password }),
		onSuccess: (data: any) => {
			onSuccessCallback?.(data.accessToken);
		},
		onError: (error) => {
			console.error('error:', error);
		},
	});
};
