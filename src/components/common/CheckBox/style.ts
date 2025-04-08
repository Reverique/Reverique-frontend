import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0px 4px;

	.label-container {
		height: 100%;

		.required {
			margin-right: 4px;
			font-size: 12px;
		}

		.label-text {
			font-size: 12px;
			line-height: 20px;
		}
	}

	.checkbox-input {
		width: 20px;
		height: 20px;
	}
`;
