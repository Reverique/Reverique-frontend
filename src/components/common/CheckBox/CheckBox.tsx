import { CheckBoxProps } from './interface';
import * as S from './style';

const CheckBox = ({
	className,
	name,
	value,
	label = null,
	isRequired = false,
	onChange,
}: CheckBoxProps) => {
	return (
		<S.CheckBoxContainer className={className}>
			{label && (
				<div className="label-container">
					{isRequired && <b className="required">*</b>}
					<label className="label-text" htmlFor={name}>
						{label}
					</label>
				</div>
			)}
			<input
				type="checkbox"
				className="checkbox-input"
				name={name}
				checked={value}
				onChange={onChange}
			/>
		</S.CheckBoxContainer>
	);
};

export default CheckBox;
