import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: ${({ theme }) => theme.Primary.Default};
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
	font-size: 24px;
	font-weight: bold;
	color: ${({ theme }) => theme.Text.Primary};
`;

export const Nav = styled.nav`
	display: flex;
	gap: 20px;
`;

export const NavItem = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.Text.Secondary};
	font-size: 16px;
	&:hover {
		color: ${({ theme }) => theme.Primary.Hover};
	}
`;
