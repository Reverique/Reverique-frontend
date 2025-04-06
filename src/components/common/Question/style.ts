import { styled } from 'styled-components';

export const QuestionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px 0px;
	width: 100%;
	text-align: right;

	.question-date {
		font: normal 12px/12px 'arial';
		color: ${(props) => props.theme.Text.Primary};
	}
`;
