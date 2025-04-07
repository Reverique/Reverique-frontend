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

	.answer-container {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.4s ease;

		.my-answer-content {
			display: flex;
			align-items: flex-end;
			justify-content: center;
			flex-direction: column;
			gap: 8px 0px;

			.answer-icon-container {
				display: flex;
				align-items: flex-end;
				justify-content: center;
				gap: 0px 4px;

				& > svg {
					cursor: pointer;
				}
			}
		}
	}

	.answer-container.show {
		max-height: 500px;
	}
`;
