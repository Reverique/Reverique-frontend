export type RadioListProps = {
	name: string;
	value: string;
	label: string;
	checked: boolean;
};

export interface RadioButtonProps {
	className?: string;
	radioList: RadioListProps[];
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
