import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loadingState } from 'store/store';
import Overlay from '../Overlay/Overlay';
import * as S from './style';

const Loading = () => {
	const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);

	useEffect(() => {
		if (isLoading) {
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	}, [isLoading]);

	return (
		<Overlay>
			<S.LoadingContainer>
				<div className="loading-spinner" />
			</S.LoadingContainer>
		</Overlay>
	);
};

export default Loading;
