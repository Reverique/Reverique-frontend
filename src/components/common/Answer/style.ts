import { styled } from 'styled-components';

export const AnswerContainer = styled.div`
	position: relative;
	width: 100%;
	min-height: 100px;
	padding: 16px 20px;
	margin-bottom: 12px;
	border: 1px solid ${(props) => props.theme.Border.Default};
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
