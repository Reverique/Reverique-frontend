import { FormContentProps } from './interface';
import * as S from './style';
const FormContent = ({ className, onSubmit, children }: FormContentProps) => {
	return (
		<S.FormContentContainer
			className={className}
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(e);
			}}
		>
			{children}
		</S.FormContentContainer>
	);
};

export default FormContent;
