import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Reverique',
	description: 'Reverique App',
};

export default function Head() {
	return (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="UTF-8" />
		</>
	);
}
