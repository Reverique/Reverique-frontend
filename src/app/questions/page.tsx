'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getQuestionList, postTodayQuestion } from 'api/question';
import Answer from 'components/common/Answer/Answer';
import Modal from 'components/common/Modal/Modal';
import Question from 'components/common/Question/Question';
import Textarea from 'components/common/Textarea/Textarea';
import { useEffect, useState } from 'react';
import { useForm } from 'react-formatic';
import { FaEdit } from 'react-icons/fa';
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
			answer1: (value: string) => value.length > 0,
		},
	);

	const queryClient = useQueryClient();
	const [questionList, setQuestionList] = useState<QuestionListTypes[]>([]);
	const [pages, setPages] = useState<QuestionListResponsePageTypes>();

	const { isLoading: isQuestionDataLoading, data: questionsData } = useQuery({
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
		{ id: number; answer: string }
	>({
		mutationFn: () => {
			const requestData = {
				id: inputValue.questionId,
				answer: inputValue.answer1,
			};

			const res = postTodayQuestion(requestData);

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
			setQuestionList(questionsData.data);
			setPages(questionsData.pageInfo);
		}
	}, [questionsData]);

	return (
		<S.QuestionsContainer>
			<ul>
				{questionList.length !== 0 &&
					questionList.map((question, idx) => (
						<li key={question.questionId}>
							<Question
								questionId={question.questionId}
								content={question.content}
								createdAt={question.createdAt}
							/>
							{
								<div className="my-answer-content">
									<div className="answer-icon-container">
										<FaEdit
											onClick={() => setAnswerTheQuestion(question.questionId)}
										/>
									</div>
									<Answer answer={question.answer1}></Answer>
								</div>
							}

							<Answer answer={question.answer2}></Answer>
						</li>
					))}
			</ul>
			{inputValue && inputValue.questionId > 0 && (
				<Modal
					confirmButtonText="확인"
					cancelButtonText="취소"
					confirmButtonDisabled={errors.answer1}
					onCancelButton={() => initializeData()}
					onConfirmButton={() => updateAnswerTheQuestion.mutate}
				>
					<Question
						questionId={inputValue.questionId}
						content={inputValue.content}
						createdAt={inputValue.createdAt}
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
