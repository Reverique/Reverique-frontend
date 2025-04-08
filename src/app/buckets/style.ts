import { styled } from 'styled-components';

export const BucketsContainer = styled.div`
	width: 100%;

	.buckets-lists {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px 0px;
		flex-direction: column;
		width: 100%;

		.buckets-list {
			width: inherit;
		}
	}
`;
