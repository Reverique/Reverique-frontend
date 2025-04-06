export interface TodayQuestionRequestTypes {
	userId: number;
	coupleId: number;
}

export interface TodayQuestionAnswerRequestTypes {
	id: number;
	answer: string;
}

export interface TodayQuestionResponseTypes {
	questionId: number;
	content: string;
	answer1: string;
	answer2: string;
	createdAt: string;
}

export interface QuestionListRequestTypes {
	userId: number;
	coupleId: number;
	page?: number;
	size?: number;
}

export interface QuestionListResponseTypes {
	code: number;
	data: QuestionListTypes[];
	message: string;
	pageInfo: QuestionListResponsePageTypes;
	status: string;
}

export interface QuestionListTypes {
	questionId: number;
	content: string;
	answer1: string;
	answer2: string;
	createdAt: string;
}

export interface QuestionListResponsePageTypes {
	number: number;
	size: number;
	totalElements: number;
	totalPages: number;
}
