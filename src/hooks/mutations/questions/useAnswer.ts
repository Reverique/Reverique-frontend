import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchTodayQuestion } from 'api/question';
import { TodayQuestionResponseTypes } from 'types/question/type';

// 질문에 대한 답변 등록/수정
// !! TODO:: 수정 필요!
export const useAnswerMutation = ({
	path = '',
	onSuccessCallback,
}: {
	path?: string;
	onSuccessCallback?: () => void;
}) => {
	const queryClient = useQueryClient();

	return useMutation<
		TodayQuestionResponseTypes,
		Error,
		{ userId: number; questionId: number; answer: string }
	>({
		mutationFn: ({ userId, questionId, answer }) =>
			patchTodayQuestion({ userId, questionId, answer }),
		onSuccess: () => {
			path === 'daily'
				? queryClient.invalidateQueries({ queryKey: ['dailyQuestion'] })
				: queryClient.invalidateQueries({ queryKey: ['questionList'] });

			onSuccessCallback?.();
		},
		onError: (error) => {
			console.error('error:', error);
		},
	});
};
