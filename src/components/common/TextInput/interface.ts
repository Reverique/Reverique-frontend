export interface TextInputProps {
	className?: string;
	label?: string | null;
	type?: string;
	name: string;
	value: string | number | any[];
	placeholder?: string;
	isRequired?: boolean;
	isErrorMsg?: boolean;
	errorMsg?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
