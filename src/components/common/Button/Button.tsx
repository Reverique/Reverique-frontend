import { ButtonProps } from './interface';
import * as S from './style';

const Button = ({
	className,
	children,
	size = 'm',
	type = 'button',
	disabled = false,
	onClick,
}: ButtonProps) => {
	return (
		<S.ButtonContainer
			className={`${className} ${size}`}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</S.ButtonContainer>
	);
};

export default Button;
