import styled from 'styled-components';

export const RootContentContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	min-height: 100vh;
	padding: 20px;
	background-color: ${({ theme }) => theme.Background.Default};
	color: ${({ theme }) => theme.Text.Primary};
	font-family: 'Arial', sans-serif;
	transition: background-color 0.3s ease;
`;
