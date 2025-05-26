import { useMutation } from '@tanstack/react-query';
import { postJoin } from 'api/auth';
import { AxiosError } from 'axios';
import { JoinRequestTypes } from 'types/auth/type';

export const useJoin = (onSuccessCallback?: () => void) => {
	return useMutation<unknown, Error, JoinRequestTypes>({
		mutationFn: ({ email, password, name, nickname, birthDate, gender }) =>
			postJoin({ email, password, name, nickname, birthDate, gender }),
		onSuccess: () => {
			onSuccessCallback?.();
		},
		onError: (error) => {
			const axiosError = error as AxiosError;
			console.error('error!!:', axiosError.response?.status);

			if (axiosError.response?.status === 400) {
				onSuccessCallback?.();
			} else {
				console.error('Unhandled error:', axiosError.message);
			}
		},
	});
};
