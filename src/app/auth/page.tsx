'use client';

import { useState } from 'react';
import Join from './join/page';
import Login from './login/page';
import * as S from './style';
const Auth = () => {
	const [isLogin, setIsLogin] = useState<boolean>(true);

	return (
		<S.AuthContainer>
			<button className="auth-btn" onClick={() => setIsLogin(!isLogin)}>
				{isLogin ? 'Join' : 'Login'}
			</button>
			{isLogin ? <Login></Login> : <Join></Join>}
		</S.AuthContainer>
	);
};

export default Auth;
