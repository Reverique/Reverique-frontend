export interface ModalProps {
	className?: string;
	title?: string;
	children?: React.ReactNode;
	isCancelButton?: boolean;
	confirmButtonText: string;
	confirmButtonDisabled?: boolean;
	cancelButtonText?: string;
	cancelButtonDisabled?: boolean;
	onConfirmButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onCancelButton?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
