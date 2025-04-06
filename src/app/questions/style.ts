import { styled } from 'styled-components';

export const QuestionsContainer = styled.div`
	width: 100%;

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

	.answer-modal-textarea {
		width: 100%;
		height: 100%;
		margin-bottom: 0px;

		textarea {
			height: inherit;
		}
	}
`;
