import styled from 'styled-components';

export const OverlayContainer = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000000;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;
