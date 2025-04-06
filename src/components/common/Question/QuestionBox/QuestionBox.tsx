import { QuestionBoxProps } from './interface';
import * as S from './style';

const QuestionBox = ({ question }: QuestionBoxProps) => {
	return (
		<S.QuestionBoxContainer>
			<strong className="question-text">{question}</strong>
		</S.QuestionBoxContainer>
	);
};

export default QuestionBox;
