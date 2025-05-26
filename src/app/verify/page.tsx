'use client';

import Button from 'components/common/Button/Button';
import FormContent from 'components/common/FormContent/FormContent';
import TextInput from 'components/common/TextInput/TextInput';
import { useVerifyEmailCode } from 'hooks/mutations/auth/useVerifyEmailCode';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-formatic';
import { useRecoilState } from 'recoil';
import { verifyEmailState } from 'store/store';
import { verifyEmailCodeRequestTypes } from 'types/auth/type';
import { textValidation } from 'utils/formValidation';
import * as S from './style';

const Verify = () => {
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
	} = useForm<verifyEmailCodeRequestTypes>(
		{
			code: '',
		},
		{
			code: textValidation,
		},
	);

	const verifyEmailCodeMutation = useVerifyEmailCode(() => {
		router.push('/auth');
	});

	const postVerifyEmailCode = () => {
		if (!isFormValid) return;

		verifyEmailCodeMutation.mutate({
			email: verifyEmail,
			code: inputValue.code,
		});
	};

	return (
		<S.VerifyContainer>
			<p>{verifyEmail}로 인증 코드가 발송되었습니다.</p>
			<FormContent onSubmit={postVerifyEmailCode}>
				<TextInput
					name={'code'}
					label="이메일 인증 코드 입력"
					value={inputValue.code}
					onChange={onChangeInputValue}
				></TextInput>
				<Button type="submit" disabled={!isFormValid}>
					확인
				</Button>
			</FormContent>
		</S.VerifyContainer>
	);
};

export default Verify;
