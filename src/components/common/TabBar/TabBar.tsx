import constants from 'constants/index';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loadingState, tabBarIconState, userInfoState } from 'store/store';
import { TabBarIconTypes } from './interface';
import * as S from './style';
const TabBar = () => {
	const [userInfo, setUserInfo] = useRecoilState(userInfoState);

	const [iconList, setIconList] =
		useRecoilState<TabBarIconTypes[]>(tabBarIconState);
	const router = useRouter();
	const path = usePathname();
	const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);

	const movedToPage = (index: number) => {
		if (index === undefined || index === null) {
			return;
		}

		const result = iconList.map((item, idx: number) => {
			return {
				...item,
				isActive: index === idx,
			};
		});

		setIconList(result);
		setIsLoading(true);
		router.push(constants.TAB_BAR_ROUTES[index]);
	};

	useEffect(() => {
		if (iconList.length !== 0) {
			return;
		}

		const findCurrentIndex = constants.TAB_BAR_ROUTES.findIndex(
			(route) => route === path,
		);

		const result = constants.TAB_BAR_ICON_NAMES.map((item, idx: number) => {
			return {
				icon: item,
				isActive: idx === findCurrentIndex,
			};
		});

		setIconList(result);
	}, []);

	return (
		userInfo && (
			<S.TabBarContainer>
				<ul className="tab-bar-icon-lists">
					{iconList.length !== 0 &&
						iconList.map((item, idx) => (
							<li
								key={idx}
								className={`tab-bar-icon-list ${item.isActive ? 'active' : ''}`}
								onClick={() => movedToPage(idx)}
							>
								<item.icon />
							</li>
						))}
				</ul>
			</S.TabBarContainer>
		)
	);
};

export default TabBar;
