export interface QuestionProps {
	questionId: number;
	content: string;
	createdAt: string;
	answer1: string | null;
	answer2: string | null;
	isActive?: boolean;
	onToggle?: (id: number) => void;
	onEditClick?: (id: number) => void;
}
