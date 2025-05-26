import { TextInputProps } from './interface';
import * as S from './style';

const TextInput = ({
	className,
	label = null,
	type = 'text',
	name,
	value,
	placeholder,
	isRequired = false,
	isErrorMsg = false,
	errorMsg,
	onChange,
}: TextInputProps) => {
	return (
		<S.TextInputContainer className={className}>
			{label && (
				<div className="label-container">
					{isRequired && <b className="required">*</b>}
					<label className="label-text" htmlFor={name}>
						{label}
					</label>
				</div>
			)}
			<input
				className="input-text"
				type={type}
				name={name}
				id={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
			{isErrorMsg && (
				<div className="error-msg-container">
					<p className="error-msg">{errorMsg}</p>
				</div>
			)}
		</S.TextInputContainer>
	);
};

export default TextInput;
