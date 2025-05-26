import styled from 'styled-components';

export const TextInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px 0px;

	.label-container {
		.required {
			margin-right: 4px;
			font-size: 12px;
		}

		.label-text {
			font-size: 12px;
		}
	}

	.input-text {
		width: 200px;
		height: 32px;
		padding-left: 4px;
		font-size: 12px;
	}

	.error-msg-container {
		.error-msg {
			font-size: 12px;
		}
	}
`;
