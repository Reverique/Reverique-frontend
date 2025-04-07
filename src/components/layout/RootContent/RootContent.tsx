import Loading from 'components/common/Lodaing/Lodaing';
import { useRecoilState } from 'recoil';
import { loadingState } from 'store/store';
import { RootContentProps } from './interface';
import * as S from './style';

const RootContent = ({ children }: RootContentProps) => {
	const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);

	return (
		<S.RootContentContainer>
			{children}
			{isLoading && <Loading />}
		</S.RootContentContainer>
	);
};

export default RootContent;
