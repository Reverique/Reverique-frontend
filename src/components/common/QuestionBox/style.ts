import { styled } from 'styled-components';

export const QuestionBoxContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 16px 20px;
	background-color: ${(props) => props.theme.Background.Default};
	border: 1px solid ${(props) => props.theme.Border.Default};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;

	.question-text {
		font-size: 16px;
		line-height: 24px;
		color: ${(props) => props.theme.Text.Primary};
	}
`;
