import { TextareaProps } from './interface';
import * as S from './style';
const Textarea = ({
	className,
	name,
	value,
	label = null,
	isRequired = false,
	onChange,
	placeHolder,
	children,
	maxLength,
	error = {
		isErrorMsg: false,
		errorMsg: '',
	},
}: TextareaProps) => {
	return (
		<S.TextareaContainer className={className}>
			{label && (
				<div className="label-container">
					{isRequired && <b className="required">*</b>}
					<label htmlFor={name} className="label-text">
						{label}
					</label>
				</div>
			)}
			<textarea
				name={name}
				className={`textarea-input ${value !== '' && error.isErrorMsg ? 'error' : ''}`}
				id={name}
				value={value || ''}
				onChange={onChange}
				maxLength={maxLength}
				placeholder={placeHolder || ''}
			/>
			{error.isErrorMsg && (
				<div className="error-msg-container">
					<p className="error-msg">{error.errorMsg}</p>
				</div>
			)}
			{children}
		</S.TextareaContainer>
	);
};

export default Textarea;
