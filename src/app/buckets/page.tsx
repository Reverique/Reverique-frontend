'use client';

import { useQueryClient } from '@tanstack/react-query';
import Bucket from 'components/common/Bucket/Bucket';
import CheckBox from 'components/common/CheckBox/CheckBox';
import { useBucketList } from 'hooks/queries/bucketlist/useBucketList';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { loadingState } from 'store/store';
import {
	BucketListResponsePageTypes,
	BucketListTypes,
} from 'types/bucketlist/type';
import * as S from './style';

const Buckets = () => {
	const queryClient = useQueryClient();
	const [bucketList, setBucketList] = useState<BucketListTypes[]>([]);

	const [updatedBucket, setUpdatedBucket] = useState<{
		type: string;
		id: number | undefined;
	}>({
		type: '',
		id: undefined,
	});

	const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);

	const [pages, setPages] = useState<BucketListResponsePageTypes>({
		page: 1,
		number: 0,
		size: 10,
		totalElements: 0,
		totalPages: 0,
	});

	const { data: bucketsData, isLoading: isBucketsDataLoading } =
		useBucketList(3);

	const updatedBucketListId = (id: number, type: string) => {
		if (
			!id ||
			!type ||
			(id === updatedBucket.id && type === updatedBucket.type)
		) {
			return;
		}

		setUpdatedBucket({ id, type });
	};

	useEffect(() => {
		if (bucketsData && bucketsData.data.length !== 0) {
			setBucketList(bucketsData.data);
			setPages((prev) => ({
				...prev,
				...bucketsData.pageInfo,
			}));
		}
	}, [bucketsData]);

	return (
		<S.BucketsContainer>
			<ul className="buckets-lists">
				{bucketList.length !== 0 &&
					bucketList.map((bucket, idx) => (
						<li key={bucket.id} className="buckets-list">
							<div
								className="bucket-completed-checkbox-container"
								onClick={() => updatedBucketListId(bucket.id, 'completed')}
							>
								<CheckBox
									name={String(bucket.id)}
									value={bucket.isCompleted === 0}
									onChange={() => {}}
								/>
							</div>
							<Bucket
								content={bucket.title}
								id={bucket.id}
								onDeletedBucket={(id) => updatedBucketListId(id, 'delete')}
								onUpdatedBucket={(id) => updatedBucketListId(id, 'edit')}
							/>
						</li>
					))}
			</ul>
			{}
		</S.BucketsContainer>
	);
};

export default Buckets;
