import { useMutation } from '@tanstack/react-query';
import { postVerifyEmail } from 'api/auth';
import { verifyEmailRequestTypes } from 'types/auth/type';

export const useVerifyEmail = (onSuccessCallback?: () => void) => {
	return useMutation<unknown, Error, verifyEmailRequestTypes>({
		mutationFn: ({ email }) => postVerifyEmail({ email }),
		onSuccess: () => {
			onSuccessCallback?.();
		},
		onError: (error) => {
			console.error('error!!:', error);
		},
	});
};
