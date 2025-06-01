'use client';

import { useQueryClient } from '@tanstack/react-query';
import Bucket from 'components/common/Bucket/Bucket';
import Button from 'components/common/Button/Button';
import CheckBox from 'components/common/CheckBox/CheckBox';
import ContentBox from 'components/common/ContentBox/ContentBox';
import Modal from 'components/common/Modal/Modal';
import Textarea from 'components/common/Textarea/Textarea';
import { useDeletedBucketMutation } from 'hooks/mutations/bucketlist/useDeletedBucket';
import {
	useCreatedBucketMutation,
	useEditedBucketMutation,
} from 'hooks/mutations/bucketlist/useUpdatedBucket';
import { useBucketList } from 'hooks/queries/bucketlist/useBucketList';
import { useEffect, useState } from 'react';
import { useForm } from 'react-formatic';
import { FaCheck } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { loadingState } from 'store/store';
import {
	BucketListResponsePageTypes,
	BucketListTypes,
} from 'types/bucketlist/type';
import * as S from './style';

// TODO: 리팩터링 필요!
const Buckets = () => {
	const {
		inputValue,
		setInputValue,
		onChangeInputValue,
		onChangeFileInputValue,
		onChangeRadioButton,
		onChangeCheckBox,
		isFormValid,
		errors,
	} = useForm<{
		id: number;
		title: string;
	}>(
		{
			id: 0,
			title: '',
		},
		{
			title: (value) => value && value.length > 0,
		},
	);

	const queryClient = useQueryClient();
	const [bucketList, setBucketList] = useState<BucketListTypes[]>([]);

	const [updatedBucket, setUpdatedBucket] = useState<{
		type: string;
		id: number | undefined;
		content: string;
	}>({
		type: '',
		id: undefined,
		content: '',
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
		useBucketList(26);

	const initializeData = () => {
		setUpdatedBucket({
			type: '',
			id: undefined,
			content: '',
		});
	};

	const removeMutation = useDeletedBucketMutation(initializeData);
	const addMutation = useCreatedBucketMutation(initializeData);
	const updateMutation = useEditedBucketMutation(initializeData);

	const updatedBucketListId = (id: number, type: string, content: string) => {
		if (
			!id ||
			!type ||
			(id === updatedBucket.id && type === updatedBucket.type)
		) {
			return;
		}

		setUpdatedBucket({ id, type, content });

		type === 'edit' &&
			setInputValue({
				id: id,
				title: content,
			});
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
			<Button className="add-bucket-btn" onClick={() => {}}>
				추가
			</Button>
			<ul className="buckets-lists">
				{bucketList.length !== 0 &&
					bucketList.map((bucket, idx) => (
						<li key={bucket.id} className="buckets-list">
							<div
								className="bucket-completed-checkbox-container"
								onClick={() =>
									updatedBucketListId(bucket.id, 'completed', bucket.title)
								}
							>
								<CheckBox
									name={String(bucket.id)}
									value={bucket.isCompleted === 1}
									onChange={() => {}}
								/>
							</div>
							{bucket.id === updatedBucket.id &&
							updatedBucket.type === 'edit' ? (
								<>
									<Textarea
										className="bucket-edit-textarea"
										name="title"
										value={inputValue.title}
										onChange={onChangeInputValue}
									/>
									<FaCheck
										onClick={() =>
											updateMutation.mutate({
												id: inputValue.id || 0,
												title: inputValue.title,
												isCompleted: bucket.isCompleted,
											})
										}
									/>
									<MdCancel />
								</>
							) : (
								<Bucket
									content={bucket.title}
									id={bucket.id}
									onDeletedBucket={(id) =>
										updatedBucketListId(id, 'delete', bucket.title)
									}
									onUpdatedBucket={(id) =>
										updatedBucketListId(id, 'edit', bucket.title)
									}
								/>
							)}
						</li>
					))}
			</ul>
			{updatedBucket.id &&
				updatedBucket.type !== '' &&
				updatedBucket.type !== 'edit' && (
					<Modal
						confirmButtonText={
							updatedBucket.type === 'delete' ? '삭제' : '완료'
						}
						cancelButtonText="취소"
						onCancelButton={() => initializeData()}
						onConfirmButton={() => {
							updatedBucket.type === 'delete'
								? removeMutation.mutate({ id: updatedBucket.id || 0 })
								: updateMutation.mutate({
										id: updatedBucket.id || 0,
										title: updatedBucket.content,
										isCompleted: 1,
									});
						}}
					>
						<ContentBox content={updatedBucket.content} />
					</Modal>
				)}
		</S.BucketsContainer>
	);
};

export default Buckets;
