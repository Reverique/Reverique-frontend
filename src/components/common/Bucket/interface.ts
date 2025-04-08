export interface BucketProps {
	content: string;
	id: number;
	onDeletedBucket?: (id: number) => void | undefined;
	onUpdatedBucket?: (id: number) => void | undefined;
}
