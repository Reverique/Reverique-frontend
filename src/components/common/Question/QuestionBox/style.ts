import { styled } from 'styled-components';

export const QuestionBoxContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 16px 20px;
	margin-bottom: 20px;
	background-color: ${(props) => props.theme.Background.Default};
	border: 1px solid ${(props) => props.theme.Border.Default};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	.question-text {
		font-size: 16px;
		line-height: 24px;
		color: ${(props) => props.theme.Text.Primary};
	}
`;
