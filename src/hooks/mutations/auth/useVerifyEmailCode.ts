import { useMutation } from '@tanstack/react-query';
import { postVerifyEmailCode } from 'api/auth';
import { verifyEmailCodeRequestTypes } from 'types/auth/type';

export const useVerifyEmailCode = (onSuccessCallback?: () => void) => {
	return useMutation<unknown, Error, verifyEmailCodeRequestTypes>({
		mutationFn: ({ email, code }) => postVerifyEmailCode({ email, code }),
		onSuccess: () => {
			onSuccessCallback?.();
		},
		onError: (error) => {
			console.error('error:', error);
		},
	});
};
