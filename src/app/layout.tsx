'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import theme from 'styles/theme';
import Header from '../components/layout/Header/Header';

// 계절에 맞는 컬러 테마를 반환하는 함수
const getSeasonTheme = () => {
	const month = new Date().getMonth();

	if (month >= 2 && month <= 4) {
		return theme.spring; // 봄
	} else if (month >= 5 && month <= 7) {
		return theme.summer; // 여름
	} else if (month >= 8 && month <= 10) {
		return theme.fall; // 가을
	} else {
		return theme.winter; // 겨울
	}
};

const queryClient = new QueryClient();
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const seasonTheme = getSeasonTheme();

	return (
		<html lang="ko">
			<body className={inter.className}>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={seasonTheme}>
						<GlobalStyle />
						<Header />
						{children}
					</ThemeProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
}
