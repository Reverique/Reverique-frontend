'use client';

import Textarea from 'components/common/Textarea/Textarea';
import { useForm } from 'react-formatic';

import { useQueryClient } from '@tanstack/react-query';
import Modal from 'components/common/Modal/Modal';
import Question from 'components/common/Question/Question';
import { useAnswerMutation } from 'hooks/mutations/questions/useAnswer';
import { useTodayQuestion } from 'hooks/queries/questions/useQuestion';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { loadingState, questionDetailState } from 'store/store';
import { TodayQuestionTypes } from 'types/question/type';

const Home = () => {
	const {
		inputValue,
		setInputValue,
		onChangeInputValue,
		onChangeFileInputValue,
		onChangeRadioButton,
		onChangeCheckBox,
		isFormValid,
		errors,
	} = useForm<TodayQuestionTypes>(
		{
			questionId: 0,
			content: '',
			answer1: null,
			answer2: null,
			createdAt: '',
		},
		{
			answer1: (value: string) => value !== '',
		},
	);

	const queryClient = useQueryClient();

	const [showQuestion, setShowQuestion] = useRecoilState<number | null>(
		questionDetailState,
	);
	const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);

	const [isAddQuestion, setIsAddQuestion] = useState<boolean>(false);

	const { data: dailyQuestionData, isLoading: isDailyQuestionDataLoading } =
		useTodayQuestion(3, 1);

	const answerMutation = useAnswerMutation({
		path: 'daily',
		onSuccessCallback: () => {
			initializeData();
		},
	});

	const handleSubmitAnswer = () => {
		answerMutation.mutate({
			userId: 1,
			questionId: inputValue.questionId,
			answer: inputValue.answer1 || '',
		});
	};

	const initializeData = () => {
		setIsAddQuestion(false);

		setInputValue((prev) => ({
			...prev,
			answer1: dailyQuestionData?.data.answer1 || null,
		}));
	};

	useEffect(() => {
		if (dailyQuestionData && dailyQuestionData.data) {
			setIsLoading(true);
			setInputValue((prev) => ({ ...dailyQuestionData.data }));
		}
	}, [dailyQuestionData]);

	return (
		<div>
			{inputValue.content !== '' && (
				<>
					<Question
						questionId={inputValue.questionId}
						content={inputValue.content}
						createdAt={inputValue.createdAt}
						answer1={inputValue.answer1}
						answer2={inputValue.answer2}
						isActive={showQuestion === inputValue.questionId}
						onToggle={(id) => setShowQuestion(id)}
						onEditClick={() => setIsAddQuestion(true)}
					/>
					{isAddQuestion && (
						<Modal
							confirmButtonText="확인"
							cancelButtonText="취소"
							confirmButtonDisabled={errors.answer1}
							onCancelButton={() => initializeData()}
							onConfirmButton={() => handleSubmitAnswer()}
						>
							<Question
								questionId={inputValue.questionId}
								content={inputValue.content}
								createdAt={inputValue.createdAt}
								answer1={null}
								answer2={null}
								isActive={false}
								onToggle={() => {
									return;
								}}
							/>
							<Textarea
								className="answer-modal-textarea"
								name="answer1"
								value={inputValue.answer1 || ''}
								onChange={onChangeInputValue}
							/>
						</Modal>
					)}
				</>
			)}
		</div>
	);
};

export default Home;
