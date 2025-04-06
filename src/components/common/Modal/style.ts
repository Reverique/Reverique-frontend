import styled from 'styled-components';

export const ModalContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 80%;
	height: 400px;
	padding: 20px;
	background-color: #fff;

	.modal-container {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		gap: 16px 0px;
		width: inherit;
		height: inherit;

		.modal-content {
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			align-items: center;
			width: 100%;
			height: 100%;
		}
	}

	.modal-button-container {
		display: flex;
		justify-content: center;
		gap: 0px 16px;
	}
`;
