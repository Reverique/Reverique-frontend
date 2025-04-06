import { OverlayProps } from './interface';
import * as S from './style';

const Overlay = ({ children, onClick, isLoading = true }: OverlayProps) => {
	return <S.OverlayContainer onClick={onClick}>{children}</S.OverlayContainer>;
};

export default Overlay;
