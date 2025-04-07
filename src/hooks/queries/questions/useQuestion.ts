import { useQuery } from '@tanstack/react-query';
import { getQuestionList, getTodayQuestion } from 'api/question';

// 오늘의 질문 불러오기
export const useTodayQuestion = (userId: number, coupleId: number) => {
	return useQuery({
		queryKey: ['dailyQuestion'],
		queryFn: () => getTodayQuestion({ userId, coupleId }),
		retry: false,
		refetchOnWindowFocus: false,
	});
};

// 질문 리스트 불러오기
export const useQuestionList = (userId: number, coupleId: number) => {
	return useQuery({
		queryKey: ['questionList'],
		queryFn: () => getQuestionList({ userId, coupleId }),
		retry: false,
		refetchOnWindowFocus: false,
	});
};
