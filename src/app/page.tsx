'use client';

import QuestionBox from 'components/common/QuestionBox/QuestionBox';
import Textarea from 'components/common/Textarea/Textarea';
import RootContent from 'components/layout/RootContent/RootContent';
import { FormContent, useForm } from 'react-formatic';

import Button from '../components/common/Button/Button';

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
	} = useForm(
		{
			questionId: 0,
			question: `It's Today Question!!`,
			answer: '',
			date: null,
		},
		{
			answer: (value: string) => value.length > 0,
		},
	);

	return (
		<RootContent>
			<div>
				<FormContent onSubmit={() => {}}>
					<QuestionBox question={inputValue.question}></QuestionBox>
					<Textarea
						name="answer"
						value={inputValue.answer}
						onChange={onChangeInputValue}
						error={{
							isErrorMsg: errors.answer,
							errorMsg: '답변을 입력해주세요.',
						}}
					></Textarea>
					<Button disabled={errors.answer}>Button</Button>
				</FormContent>
			</div>
		</RootContent>
	);
};

export default Home;
