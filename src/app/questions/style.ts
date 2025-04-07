import { styled } from 'styled-components';

export const QuestionsContainer = styled.div`
	width: 100%;

	.questions-lists {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 32px 0px;
		flex-direction: column;
		width: 100%;

		.questions-list {
			width: inherit;
		}
	}
`;
