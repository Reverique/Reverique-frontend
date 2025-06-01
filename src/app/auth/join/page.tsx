import Button from 'components/common/Button/Button';
import FormContent from 'components/common/FormContent/FormContent';
import RadioButton from 'components/common/RadioButton/RadioButton';
import TextInput from 'components/common/TextInput/TextInput';
import { useJoin } from 'hooks/mutations/auth/useJoin';
import { useVerifyEmail } from 'hooks/mutations/auth/useVerifyEmail';
import { useVerifyEmailCode } from 'hooks/mutations/auth/useVerifyEmailCode';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-formatic';
import { JoinRequestTypes } from 'types/auth/type';
import {
	emailValidation,
	passwordValidation,
	textValidation,
} from 'utils/formValidation';
import * as S from './style';

// TODO: 회원가입 페이지 및 verify 페이지 수정 필요!
const Join = () => {
	const router = useRouter();
	const [isVerify, setIsVerify] = useState<boolean>(false);

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
			code: '',
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
		setIsVerify(true);
	});

	const postVerifyEmail = () => {
		if (!inputValue.email) return;

		verifyEmailMutation.mutate({
			email: inputValue.email,
		});
	};

	const signUpMutation = useJoin(() => {
		// postVerifyEmail();
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

		router.push('/auth');
	};

	const verifyEmailCodeMutation = useVerifyEmailCode(() => {
		setIsVerify(false);
	});

	const postVerifyEmailCode = () => {
		// if (!isFormValid) return;

		verifyEmailCodeMutation.mutate({
			email: inputValue.email,
			code: inputValue?.code || '',
		});
	};

	return (
		<S.JoinContainer>
			{isVerify ? (
				<S.VerifyContainer>
					<p>{inputValue.email}로 인증 코드가 발송되었습니다.</p>
					<>
						<TextInput
							name={'code'}
							label="이메일 인증 코드 입력"
							value={inputValue?.code || ''}
							onChange={onChangeInputValue}
						></TextInput>
						<Button type="button" onClick={() => postVerifyEmailCode()}>
							확인
						</Button>
					</>
				</S.VerifyContainer>
			) : (
				<FormContent onSubmit={postSignUp}>
					<div>
						<TextInput
							name={'email'}
							label="Email"
							value={inputValue.email}
							onChange={onChangeInputValue}
						></TextInput>
						<Button
							type="button"
							disabled={errors.email}
							onClick={() => postVerifyEmail()}
						>
							이메일 인증
						</Button>
					</div>

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
			)}
		</S.JoinContainer>
	);
};

export default Join;
