import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchBucketList, postBucketList } from 'api/bucketlist';
import { BucketListResponseTypes } from 'types/bucketlist/type';

export const useCreatedBucketMutation = (onSuccessCallback?: () => void) => {
	const queryClient = useQueryClient();

	return useMutation<
		BucketListResponseTypes,
		Error,
		{ id: number; title: string; isCompleted: number }
	>({
		mutationFn: ({ id, title, isCompleted }) =>
			postBucketList({ id, title, isCompleted }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['bucketList'] });
			onSuccessCallback?.();
		},
		onError: (error) => {
			console.error('error:', error);
		},
	});
};

// !! TODO: 완료 처리 및 수정하면 순서가 자꾸 변경됨 ( 수정 요청 필요 )
// TODO: 완료 처리 취소 기능 구현 필요!
export const useEditedBucketMutation = (onSuccessCallback?: () => void) => {
	const queryClient = useQueryClient();

	return useMutation<
		BucketListResponseTypes,
		Error,
		{ id: number; title: string; isCompleted: number }
	>({
		mutationFn: ({ id, title, isCompleted }) =>
			patchBucketList({ id, title, isCompleted }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['bucketList'] });
			onSuccessCallback?.();
		},
		onError: (error) => {
			console.error('error:', error);
		},
	});
};
