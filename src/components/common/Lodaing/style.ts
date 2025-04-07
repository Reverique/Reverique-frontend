import styled from 'styled-components';

export const LoadingContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 75px;
	height: 75px;
	border-radius: 50%;

	.loading-spinner {
		width: inherit;
		height: inherit;
		border: 5px solid ${({ theme }) => theme.Primary.Disabled};
		border-top: 5px solid ${({ theme }) => theme.Primary.Default};
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.2);
		-webkit-animation: spin 1s linear infinite;
		animation: spin 1s linear infinite;

		@-webkit-keyframes spin {
			0% {
				-webkit-transform: rotate(0deg);
			}
			100% {
				-webkit-transform: rotate(360deg);
			}
		}

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
`;
