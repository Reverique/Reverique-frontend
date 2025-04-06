import { styled } from 'styled-components';

export const TabBarContainer = styled.div`
	position: fixed;
	bottom: 0px;
	left: 0px;
	width: 100%;
	height: 45px;
	background-color: ${({ theme }) => theme.Primary.Disabled};

	.tab-bar-icon-lists {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: inherit;
		height: inherit;

		.tab-bar-icon-list {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			height: inherit;
			cursor: pointer;

			& > svg {
				width: 100%;
				height: 50%;
			}
		}

		.tab-bar-icon-list.active {
			& > svg {
				fill: ${({ theme }) => theme.Secondary.Default};
				stroke: ${({ theme }) => theme.Primary.Disabled};
			}
		}
	}
`;
