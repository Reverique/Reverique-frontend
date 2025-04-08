import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import ContentBox from '../ContentBox/ContentBox';
import { BucketProps } from './interface';
import * as S from './style';

const Bucket = ({
	content,
	id,
	onDeletedBucket,
	onUpdatedBucket,
}: BucketProps) => {
	return (
		<S.BucketContainer>
			<ContentBox content={content}>
				<div className="bucket-icon-container">
					<FaEdit onClick={() => onUpdatedBucket?.(id)} />
					<RiDeleteBin6Fill onClick={() => onDeletedBucket?.(id)} />
				</div>
			</ContentBox>
		</S.BucketContainer>
	);
};

export default Bucket;
