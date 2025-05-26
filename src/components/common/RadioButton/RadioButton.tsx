import { RadioButtonProps } from './interface';
import * as S from './style';

const RadioButton = ({ className, radioList, onChange }: RadioButtonProps) => {
	return (
		<S.RadioButtonContainer className={className}>
			{radioList.map((radio, idx) => (
				<label htmlFor={radio.name} key={idx} className="raido-content">
					<span className="label-text">{radio.label}</span>
					<input
						id={radio.name}
						className={`radio-input ${radio.name}`}
						name={radio.name}
						value={radio.value}
						checked={radio.checked}
						type="radio"
						onChange={onChange}
					/>
				</label>
			))}
		</S.RadioButtonContainer>
	);
};

export default RadioButton;
