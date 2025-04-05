export interface TodayQuestionRequestTypes {
	userId: number;
	coupleId: number;
}

export interface TodayQuestionAnswerRequestTypes {
	id: number;
	userId: number;
	coupleId: number;
	questionId: number;
	createdAt: string;
	deleted: number;
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
	questionId: number;
	content: string;
	answer1: string;
	answer2: string;
	createdAt: string;
}
[];
