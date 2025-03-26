// 버튼 사이즈별 크기 ( 추후 추가 예정 )
type buttonSize = 's' | 'm' | 'l';

type buttonType = 'button' | 'submit';

export interface ButtonProps {
	className?: string;
	children: React.ReactNode;
	size?: buttonSize;
	type?: buttonType;
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
