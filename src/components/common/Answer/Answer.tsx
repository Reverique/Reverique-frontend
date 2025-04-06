import { AnswerProps } from './interface';
import * as S from './style';

const Answer = ({ answer }: AnswerProps) => {
	return (
		<S.AnswerContainer>
			<strong className="answer-text">{answer}</strong>
		</S.AnswerContainer>
	);
};

export default Answer;
