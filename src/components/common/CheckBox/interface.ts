export interface CheckBoxProps {
	className?: string;
	name: string;
	value: boolean;
	label?: string | null;
	isRequired?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
