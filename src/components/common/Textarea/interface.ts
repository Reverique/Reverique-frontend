interface TextareaErrorTypes {
	isErrorMsg?: boolean;
	errorMsg?: string;
}

export interface TextareaProps {
	className?: string;
	name: string;
	value: string;
	label?: string | null;
	maxLength?: number;
	isRequired?: boolean;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	placeHolder?: string;
	children?: React.ReactNode;
	error?: TextareaErrorTypes;
}
