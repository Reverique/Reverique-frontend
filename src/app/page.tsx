'use client';

import Textarea from 'components/common/Textarea/Textarea';
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
		<div>
			<FormContent onSubmit={() => {}}>
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
	);
};

export default Home;
