import { RootContentProps } from './interface';
import * as S from './style';

const RootContent = ({ children }: RootContentProps) => {
	return <S.RootContentContainer>{children}</S.RootContentContainer>;
};

export default RootContent;
