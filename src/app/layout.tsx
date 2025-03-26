'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import theme from 'styles/theme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
