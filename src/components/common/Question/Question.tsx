import { FaEdit } from 'react-icons/fa';
import Answer from '../Answer/Answer';
import { QuestionProps } from './interface';
import QuestionBox from './QuestionBox/QuestionBox';
import * as S from './style';
const Question = ({
	questionId,
	content,
	createdAt,
	answer1,
	answer2,
	isActive = false,
	onToggle,
	onEditClick,
}: QuestionProps) => {
	return (
		<S.QuestionContainer>
			<span className="question-date">{createdAt}</span>
			<div className="question-content" onClick={() => onToggle(questionId)}>
				<QuestionBox question={content}></QuestionBox>
			</div>
			<div className={`answer-container ${isActive ? 'show' : 'hide'}`}>
				<div className="my-answer-content">
					<div className="answer-icon-container">
						<FaEdit onClick={() => onEditClick(questionId)} />
					</div>
					<Answer answer={answer1}></Answer>
				</div>
				<Answer answer={answer2}></Answer>
			</div>
		</S.QuestionContainer>
	);
};

export default Question;
