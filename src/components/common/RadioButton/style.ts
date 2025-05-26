import styled from 'styled-components';

export const RadioButtonContainer = styled.div`
	display: flex;
	gap: 0px 16px;
	width: 100%;

	.raido-content {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.label-text {
			font-size: 12px;
		}

		.radio-input {
			width: 20px;
			height: 20px;
			margin-left: 4px;
		}
	}
`;
