import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay';
import { ModalProps } from './interface';
import * as S from './style';

const Modal = ({
	className,
	title,
	children,
	isCancelButton = true,
	confirmButtonText,
	confirmButtonDisabled = false,
	cancelButtonText,
	cancelButtonDisabled = false,
	onConfirmButton,
	onCancelButton,
}: ModalProps) => {
	return (
		<Overlay isLoading={false} onClick={onCancelButton}>
			<S.ModalContainer
				className={className}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="modal-container">
					<strong className="modal-title">{title}</strong>
					<div className="modal-content">{children}</div>
					<div className="modal-button-container">
						{isCancelButton && (
							<Button
								className="modal-btn cancel"
								disabled={cancelButtonDisabled}
								onClick={onCancelButton}
							>
								{cancelButtonText}
							</Button>
						)}

						<Button
							className="modal-btn confirm"
							disabled={confirmButtonDisabled}
							onClick={onConfirmButton}
						>
							{confirmButtonText}
						</Button>
					</div>
				</div>
			</S.ModalContainer>
		</Overlay>
	);
};

export default Modal;
