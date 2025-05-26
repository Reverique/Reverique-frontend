import { api } from 'api';
import {
	QuestionListRequestTypes,
	QuestionListResponseTypes,
	TodayQuestionAnswerRequestTypes,
	TodayQuestionRequestTypes,
	TodayQuestionResponseTypes,
} from 'types/question/type';

// 오늘의 랜덤 질문
export const getTodayQuestion = async (
	requestData: TodayQuestionRequestTypes,
) => {
	const response = await api<TodayQuestionResponseTypes>(
		'get',
		200,
		'/questions/daily-question',
		{
			userId: requestData.userId || null,
			coupleId: requestData.coupleId || null,
		},
	);
	return response.data;
};

// 오늘의 랜덤 질문 답변
export const postTodayQuestion = async (
	requestData: TodayQuestionAnswerRequestTypes,
) => {
	const response = await api<TodayQuestionResponseTypes>(
		'post',
		200,
		`/answers`,
		requestData,
	);

	return response.data;
};

// 오늘의 랜덤 징문 답변 내용 수정
export const patchTodayQuestion = async (
	requestData: TodayQuestionAnswerRequestTypes,
) => {
	const response = await api<TodayQuestionResponseTypes>(
		'patch',
		200,
		`/answers/${requestData.questionId}`,
		requestData,
	);

	return response.data;
};

// 내가 답변한 질문 리스트
export const getQuestionList = async (
	requestData: QuestionListRequestTypes,
) => {
	const response = await api<QuestionListResponseTypes>(
		'get',
		200,
		'/questions/received',
		{
			userId: requestData.userId || null,
			coupleId: requestData.coupleId || null,
			page: requestData.page || null,
			size: requestData.size || null,
		},
	);

	return response.data;
};
