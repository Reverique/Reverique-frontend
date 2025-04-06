import styled from 'styled-components';

export const RootContentContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 20px 20px 65px 20px;
	background-color: ${({ theme }) => theme.Background.Default};
	color: ${({ theme }) => theme.Text.Primary};
	font-family: 'Arial', sans-serif;
	transition: background-color 0.3s ease;
`;
