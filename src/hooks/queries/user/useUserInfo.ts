import { useQuery } from '@tanstack/react-query';
import { getUser } from 'api/user';

export const useUserInfo = () => {
	return useQuery({
		queryKey: ['bucketList'],
		queryFn: () => getUser(),
		retry: false,
		refetchOnWindowFocus: false,
	});
};
