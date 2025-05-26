import Button from 'components/common/Button/Button';
import FormContent from 'components/common/FormContent/FormContent';
import TextInput from 'components/common/TextInput/TextInput';
import { useLogin } from 'hooks/mutations/auth/useLogin';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-formatic';
import { useRecoilState } from 'recoil';
import { userInfoState } from 'store/store';
import { LoginRequestTypes } from 'types/auth/type';
import { emailValidation, passwordValidation } from 'utils/formValidation';
import * as S from './style';
const Login = () => {
	const router = useRouter();
	const [userInfo, setUserInfo] = useRecoilState<string | null>(userInfoState);

	const {
		inputValue,
		setInputValue,
		onChangeInputValue,
		onChangeFileInputValue,
		onChangeRadioButton,
		onChangeCheckBox,
		isFormValid,
		errors,
	} = useForm<LoginRequestTypes>(
		{
			email: '',
			password: '',
		},
		{
			email: emailValidation,
			password: passwordValidation,
		},
	);

	const signInMutation = useLogin((token: string) => {
		setUserInfo(token);

		router.push('/');
	});

	const postSignIn = () => {
		if (!isFormValid) return;

		signInMutation.mutate({
			email: inputValue.email,
			password: inputValue.password,
		});
	};

	return (
		<S.LoginContainer>
			<FormContent onSubmit={postSignIn}>
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
				<Button type="submit" disabled={!isFormValid}>
					Login
				</Button>
			</FormContent>
		</S.LoginContainer>
	);
};

export default Login;
