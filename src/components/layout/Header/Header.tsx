import { useRecoilState } from 'recoil';
import { userInfoState } from 'store/store';
import * as S from './style';

const Header = () => {
	const [userInfo, setUserInfo] = useRecoilState(userInfoState);

	return (
		<S.HeaderContainer>
			<S.Logo>Reverique</S.Logo>
			{userInfo && (
				<S.Nav>
					<S.NavItem href="/">Home</S.NavItem>
				</S.Nav>
			)}
		</S.HeaderContainer>
	);
};

export default Header;
