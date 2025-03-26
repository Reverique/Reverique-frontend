import styled from 'styled-components';

export const TextareaContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 4px 0px;
	margin-bottom: 40px;

	.label-container {
		.label-text {
			font-size: 14px;
			color: ${(props) => props.theme.Text.Primary};
		}
	}

	.textarea-input {
		padding: 10px;
		border: 1px solid ${(props) => props.theme.Border.Default};
		border-radius: 8px;
		background-color: ${(props) => props.theme.Background.Default};
		color: ${(props) => props.theme.Text.Primary};
		font-size: 14px;
		line-height: 18px;
		outline: none;
		resize: none;

		&:focus {
			border-color: ${(props) => props.theme.Primary.Focus};
			background-color: ${(props) => props.theme.Background.Hover};
		}
		&.error {
			border-color: ${(props) => props.theme.Error.Default};
			background-color: ${(props) => props.theme.Error.Disabled};
		}
	}

	.error-msg-container {
		margin-top: 4px;
		.error-msg {
			color: ${(props) => props.theme.Error.Default};
			font-size: 12px;
		}
	}
`;
