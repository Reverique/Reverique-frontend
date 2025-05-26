import Button from 'components/common/Button/Button';
import FormContent from 'components/common/FormContent/FormContent';
import RadioButton from 'components/common/RadioButton/RadioButton';
import TextInput from 'components/common/TextInput/TextInput';
import { useJoin } from 'hooks/mutations/auth/useJoin';
import { useVerifyEmail } from 'hooks/mutations/auth/useVerifyEmail';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-formatic';
import { useRecoilState } from 'recoil';
import { verifyEmailState } from 'store/store';
import { JoinRequestTypes } from 'types/auth/type';
import {
	emailValidation,
	passwordValidation,
	textValidation,
} from 'utils/formValidation';
import * as S from './style';

const Join = () => {
	const router = useRouter();
	const [verifyEmail, setVerifyEmail] =
		useRecoilState<string>(verifyEmailState);

	const {
		inputValue,
		setInputValue,
		onChangeInputValue,
		onChangeFileInputValue,
		onChangeRadioButton,
		onChangeCheckBox,
		isFormValid,
		errors,
	} = useForm<JoinRequestTypes>(
		{
			email: '',
			password: '',
			name: '',
			nickname: '',
			birthDate: '',
			gender: [
				{
					label: '여',
					value: '여',
					name: '여',
					checked: true,
				},
				{
					label: '남',
					value: '남',
					name: '남',
					checked: false,
				},
			],
		},
		{
			email: emailValidation,
			password: passwordValidation,
			name: textValidation,
			nickname: textValidation,
			birthDate: textValidation,
			gender: textValidation,
		},
	);

	const verifyEmailMutation = useVerifyEmail(() => {
		router.push('/verify');
	});

	const postVerifyEmail = () => {
		setVerifyEmail(inputValue.email);

		if (!inputValue.email) return;

		verifyEmailMutation.mutate({
			email: inputValue.email,
		});
	};

	const signUpMutation = useJoin(() => {
		postVerifyEmail();
	});

	const postSignUp = () => {
		if (!isFormValid) return;

		signUpMutation.mutate({
			email: inputValue.email,
			password: inputValue.password,
			name: inputValue.name,
			nickname: inputValue.nickname,
			birthDate: inputValue.birthDate,
			gender: inputValue.gender.find((g: any) => g.checked).name,
			phoneNumber: '',
			address: '',
		});
	};

	return (
		<S.JoinContainer>
			<FormContent onSubmit={postSignUp}>
				<TextInput
					name={'email'}
					label="Email"
					value={inputValue.email}
					onChange={onChangeInputValue}
				></TextInput>
				<TextInput
					name={'password'}
					label="Password"
					value={inputValue.password}
					onChange={onChangeInputValue}
				></TextInput>
				<TextInput
					name={'name'}
					label="Name"
					value={inputValue.name}
					onChange={onChangeInputValue}
				></TextInput>
				<TextInput
					name={'nickname'}
					label="Nickname"
					value={inputValue.nickname}
					onChange={onChangeInputValue}
				></TextInput>
				<TextInput
					name={'birthDate'}
					label="Birth Date"
					value={inputValue.birthDate}
					onChange={onChangeInputValue}
				></TextInput>
				<RadioButton
					radioList={inputValue.gender}
					onChange={(e) => onChangeRadioButton(e, 'gender')}
				></RadioButton>
				<Button type="submit" disabled={!isFormValid}>
					Join
				</Button>
			</FormContent>
		</S.JoinContainer>
	);
};

export default Join;
