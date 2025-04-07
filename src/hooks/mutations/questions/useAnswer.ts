import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTodayQuestion } from 'api/question';
import { TodayQuestionResponseTypes } from 'types/question/type';

// 질문에 대한 답변 등록/수정
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
			postTodayQuestion({ userId, questionId, answer }),
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
