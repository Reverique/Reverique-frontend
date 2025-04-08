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

// !! TODO: 완료 처리하면 버킷리스트 목록에서 사라지는 오류 발견 ( 수정 요청 필요 )
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
