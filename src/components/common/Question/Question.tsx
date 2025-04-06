import { QuestionProps } from './interface';
import QuestionBox from './QuestionBox/QuestionBox';
import * as S from './style';

const Question = ({ questionId, content, createdAt }: QuestionProps) => {
	return (
		<S.QuestionContainer>
			<span className="question-date">{createdAt}</span>
			<QuestionBox question={content}></QuestionBox>
		</S.QuestionContainer>
	);
};

export default Question;
