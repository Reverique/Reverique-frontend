export interface BucketListRequestTypes {
	coupleId: number;
	isCompleted?: number;
}

export interface BucketListResponseTypes {
	status: string;
	code: number;
	message: string;
	data: BucketListTypes[];
	pageInfo: BucketListResponsePageTypes;
}

export interface BucketListTypes {
	id: number;
	title: string;
	coupleId: number;
	isCompleted: number;
	createdAt: string;
	completedAt: string;
	deleted: number;
}

export interface BucketListResponsePageTypes {
	page: number;
	number: number;
	size: number;
	totalElements: number;
	totalPages: number;
}

export interface BucketEditRequestTypes {
	id: number;
	title: string;
	isCompleted: number;
}
