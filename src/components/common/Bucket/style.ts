import styled from 'styled-components';

export const BucketContainer = styled.div`
	border: 1px solid red;
	position: relative;
	/* width: 100%; */

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0px 16px;
		padding: 8px 20px;
		margin: 0px;
	}

	.bucket-icon-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0px 4px;

		svg {
			cursor: pointer;
		}
	}
`;
