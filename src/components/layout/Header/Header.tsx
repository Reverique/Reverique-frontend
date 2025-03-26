import * as S from './style';

const Header = () => {
	return (
		<S.HeaderContainer>
			<S.Logo>Reverique</S.Logo>
			<S.Nav>
				<S.NavItem href="/">Home</S.NavItem>
			</S.Nav>
		</S.HeaderContainer>
	);
};

export default Header;
