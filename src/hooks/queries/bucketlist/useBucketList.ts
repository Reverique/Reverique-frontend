import { useQuery } from '@tanstack/react-query';
import { getBucketList } from 'api/bucketlist';

export const useBucketList = (coupleId: number, isCompleted?: number) => {
	return useQuery({
		queryKey: ['bucketList'],
		queryFn: () => getBucketList({ coupleId, isCompleted }),
		retry: false,
		refetchOnWindowFocus: false,
	});
};
