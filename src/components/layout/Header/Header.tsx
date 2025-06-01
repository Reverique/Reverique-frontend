import { useRecoilState } from 'recoil';
import { userInfoState } from 'store/store';
import { localStorageHelper } from 'utils/localStorageHelper';
import * as S from './style';

const Header = () => {
	const [userInfo, setUserInfo] = useRecoilState(userInfoState);

	const logout = () => {
		localStorageHelper('remove', 'accessToken');
		setUserInfo(null);
		window.location.reload();
	};

	return (
		<S.HeaderContainer>
			<S.Logo>Reverique</S.Logo>
			{userInfo && (
				<button className="logout-btn" onClick={() => logout()}>
					<strong>로그아웃</strong>
				</button>
			)}
		</S.HeaderContainer>
	);
};

export default Header;
