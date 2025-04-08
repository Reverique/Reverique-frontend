import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBucketList } from 'api/bucketlist';

export const useDeletedBucketMutation = (onSuccessCallback?: () => void) => {
	const queryClient = useQueryClient();

	return useMutation<unknown, Error, { id: number }>({
		mutationFn: ({ id }) => deleteBucketList(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['bucketList'] });
			onSuccessCallback?.();
		},
		onError: (error) => {
			console.error('error:', error);
		},
	});
};
