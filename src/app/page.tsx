'use client';

import Textarea from 'components/common/Textarea/Textarea';
import { useForm } from 'react-formatic';

import { useQueryClient } from '@tanstack/react-query';
import Modal from 'components/common/Modal/Modal';
import Question from 'components/common/Question/Question';
import { useAnswerMutation } from 'hooks/mutations/questions/useAnswer';
import { useTodayQuestion } from 'hooks/queries/questions/useQuestion';
import { useUserInfo } from 'hooks/queries/user/useUserInfo';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { loadingState, questionDetailState, userInfoState } from 'store/store';
import { TodayQuestionTypes } from 'types/question/type';
import { localStorageHelper } from 'utils/localStorageHelper';

const Home = () => {
	const router = useRouter();
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

	const [userInfo, setUserInfo] = useRecoilState(userInfoState);

	const { data: userInfoData, isLoading: isUserInfoDataLoading } =
		useUserInfo();

	const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);

	const [isAddQuestion, setIsAddQuestion] = useState<boolean>(false);

	const { data: dailyQuestionData, isLoading: isDailyQuestionDataLoading } =
		useTodayQuestion(55, 26);

	const answerMutation = useAnswerMutation({
		path: 'daily',
		onSuccessCallback: () => {
			initializeData();
		},
	});

	// 커플 : 26, userId: 55

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
		const token = localStorageHelper('get', 'accessToken');

		if (!token) {
			router.push('/auth');
		}
	}, []);

	useEffect(() => {
		if (dailyQuestionData && dailyQuestionData.data) {
			setIsLoading(true);
			setInputValue((prev) => ({ ...dailyQuestionData.data }));
		}
	}, [dailyQuestionData]);

	useEffect(() => {
		if (userInfoData && !userInfo) {
			setUserInfo(userInfoData);
		}
	}, [userInfoData, userInfo]);

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
