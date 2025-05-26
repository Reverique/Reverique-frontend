import { api } from 'api';
import {
	BucketEditRequestTypes,
	BucketListRequestTypes,
	BucketListResponseTypes,
} from 'types/bucketlist/type';

// 등록한 버킷리스트 불러오기
export const getBucketList = async (requestData: BucketListRequestTypes) => {
	const response = await api<BucketListResponseTypes>(
		'get',
		200,
		'/bucketlists',
		{
			coupleId: requestData.coupleId,
			// isCompleted: requestData.isCompleted || 0,
		},
	);

	return response.data;
};

// 버킷리스트 최초 등록하기 ( 수정필요 requestData type 임의로 지정 )
//  !!TODO: 최초 등록인데 Request body에 보내는 데이터가 백엔드 기준으로 되어 있음.. 백엔드에 수정 요청 필요
export const postBucketList = async (requestData: BucketEditRequestTypes) => {
	const response = await api<BucketListResponseTypes>(
		'post',
		200,
		`/bucketlists`,
		requestData,
	);

	return response.data;
};

// 등록된 버킷리스트 내용 수정 또는 완료 처리
export const patchBucketList = async (requestData: BucketEditRequestTypes) => {
	const response = await api<BucketListResponseTypes>(
		'patch',
		200,
		`/bucketlists/${requestData.id}`,
		requestData,
	);

	return response.data;
};

// 등록된 버킷리스트 삭제하기
export const deleteBucketList = async (id: number) => {
	const response = await api<any>('delete', 200, `/bucketlists/${id}`);

	return response.data;
};
