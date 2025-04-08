import { styled } from 'styled-components';

export const BucketsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	gap: 24px 0px;
	width: 100%;

	.buckets-lists {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px 0px;
		flex-direction: column;
		width: 100%;

		.buckets-list {
			display: flex;
			align-items: center;
			gap: 0px 16px;
			width: inherit;

			.bucket-edit-textarea {
				margin-bottom: 0px;
				max-height: 42px;
				padding: 0px;
				width: 100%;

				textarea {
					padding: 8px 20px;
					font-size: 16px;
					font-weight: bold;
				}
			}
		}
	}
`;
