import styled from 'styled-components';

export const ButtonContainer = styled.button`
	cursor: pointer;
	border: none;
	border-radius: 4px;
	padding: 8px 20px;
	font-size: 14px;
	font-weight: 600;
	line-height: 1.5;
	text-align: center;
	user-select: none;
	transition: all 0.3s ease;

	background-color: ${({ theme }) => theme.Primary.Default};
	color: ${({ theme }) => theme.Text.Inverse};
	border: 1px solid ${({ theme }) => theme.Border.Default};

	&:hover {
		background-color: ${({ theme }) => theme.Primary.Hover};
		border-color: ${({ theme }) => theme.Border.Focus};
	}

	&:active {
		background-color: ${({ theme }) => theme.Primary.Active};
		border-color: ${({ theme }) => theme.Border.Focus};
	}

	&:disabled {
		cursor: not-allowed;
		background-color: ${({ theme }) => theme.Primary.Disabled};
		color: ${({ theme }) => theme.Text.Disabled};
		border-color: ${({ theme }) => theme.Border.Disabled};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${({ theme }) => theme.Primary.Focus};
	}
`;
