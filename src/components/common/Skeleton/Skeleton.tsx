import { SkeletonProps } from './interface';
import * as S from './style';

const Skeleton = ({
	className,
	children,
	width = '100%',
	height = '1em',
	borderRadius = '4px',
}: SkeletonProps) => {
	return (
		<S.SkeletonContainer
			className={className}
			width={width}
			height={height}
			borderRadius={borderRadius}
		>
			{children}
		</S.SkeletonContainer>
	);
};

export default Skeleton;
