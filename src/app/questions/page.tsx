'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getQuestionList, postTodayQuestion } from 'api/question';
import Modal from 'components/common/Modal/Modal';
import Question from 'components/common/Question/Question';
import Textarea from 'components/common/Textarea/Textarea';
import { useEffect, useState } from 'react';
import { useForm } from 'react-formatic';
import { useRecoilState } from 'recoil';
import { loadingState, questionDetailState } from 'store/store';
import {
	QuestionListResponsePageTypes,
	QuestionListTypes,
	TodayQuestionResponseTypes,
} from 'types/question/type';
import * as S from './style';
const Questions = () => {
	const {
		inputValue,
		setInputValue,
		onChangeInputValue,
		onChangeFileInputValue,
		onChangeRadioButton,
		onChangeCheckBox,
		isFormValid,
		errors,
	} = useForm<QuestionListTypes>(
		{
			questionId: 0,
			content: '',
			answer1: '',
			answer2: '',
			createdAt: '',
		},
		{
			answer1: (value) => value && value.length > 0,
		},
	);

	const queryClient = useQueryClient();
	const [questionList, setQuestionList] = useState<QuestionListTypes[]>([]);

	const [showQuestion, setShowQuestion] = useRecoilState<number | null>(
		questionDetailState,
	);
	const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);

	const [pages, setPages] = useState<QuestionListResponsePageTypes>({
		page: 1,
		number: 0,
		size: 10,
		totalElements: 0,
		totalPages: 0,
	});

	const { isLoading: isQuestionsDataLoading, data: questionsData } = useQuery({
		queryKey: ['questionList'],
		queryFn: () =>
			getQuestionList({
				userId: 1,
				coupleId: 3,
			}),
		retry: false,
		refetchOnWindowFocus: false,
	});

	const updateAnswerTheQuestion = useMutation<
		TodayQuestionResponseTypes,
		Error,
		{ userId: number; questionId: number; answer: string }
	>({
		mutationFn: ({ userId, questionId, answer }) => {
			const requestData = {
				userId: userId,
				questionId: questionId,
				answer: answer,
			};

			const res = postTodayQuestion(requestData);
			// const res = putTodayQuestion(requestData);

			return res;
		},
		onSuccess: () => {
			initializeData();
			queryClient.invalidateQueries({
				queryKey: ['questionList'],
			});
		},
		onError: (error) => {
			console.error('error:', error);
		},
		onSettled: () => {},
	});

	const setAnswerTheQuestion = (id: number) => {
		if (!id) {
			return;
		}

		const result = questionList.find(
			(question, idx) => question.questionId === id,
		);

		result && setInputValue(result);
	};

	const initializeData = () => {
		setInputValue({
			questionId: 0,
			content: '',
			answer1: '',
			answer2: '',
			createdAt: '',
		});
	};

	useEffect(() => {
		if (questionsData && questionsData.data.length !== 0) {
			setIsLoading(true);
			setQuestionList(questionsData.data);
			setPages((prev) => ({
				...prev,
				...questionsData.pageInfo,
			}));
		}
	}, [questionsData]);

	return (
		<S.QuestionsContainer>
			<ul className="questions-lists">
				{questionList.length !== 0 &&
					questionList.map((question, idx) => (
						<li
							key={question.questionId}
							className="questions-list"
							onClick={() => setShowQuestion(question.questionId)}
						>
							<Question
								questionId={question.questionId}
								content={question.content}
								createdAt={question.createdAt}
								answer1={question.answer1}
								answer2={question.answer2}
								isActive={showQuestion === question.questionId}
								onToggle={(id) => setShowQuestion(id)}
								onEditClick={(id) => setAnswerTheQuestion(id)}
							/>
						</li>
					))}
			</ul>
			{inputValue && inputValue.questionId > 0 && (
				<Modal
					confirmButtonText="확인"
					cancelButtonText="취소"
					confirmButtonDisabled={errors.answer1}
					onCancelButton={() => initializeData()}
					onConfirmButton={() =>
						updateAnswerTheQuestion.mutate({
							userId: 1,
							questionId: inputValue.questionId,
							answer: inputValue.answer1,
						})
					}
				>
					<Question
						questionId={inputValue.questionId}
						content={inputValue.content}
						createdAt={inputValue.createdAt}
						answer1={null}
						answer2={null}
						isActive={false}
					/>
					<Textarea
						className="answer-modal-textarea"
						name="answer1"
						value={inputValue.answer1}
						onChange={onChangeInputValue}
					/>
				</Modal>
			)}
		</S.QuestionsContainer>
	);
};

export default Questions;
