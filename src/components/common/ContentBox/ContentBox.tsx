import { ContentBoxProps } from './interface';
import * as S from './style';

const ContentBox = ({ content, children }: ContentBoxProps) => {
	return (
		<S.ContentBoxContainer>
			<strong className="content-text">{content}</strong>
			{children}
		</S.ContentBoxContainer>
	);
};

export default ContentBox;
