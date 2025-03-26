'use client';

import QuestionBox from 'components/common/QuestionBox/QuestionBox';
import Textarea from 'components/common/Textarea/Textarea';
import RootContent from 'components/layout/RootContent/RootContent';
import Button from '../components/common/Button/Button';

const Home = () => {
	return (
		<RootContent>
			<div>
				<QuestionBox question="QuestionBox"></QuestionBox>
				<Textarea name={''} value={''} onChange={() => {}}></Textarea>
				<Button>Button</Button>
			</div>
		</RootContent>
	);
};

export default Home;
