export interface Props {
	picture?: string
	setPicture: (picture: string) => void
	isApproved?: number
	setIsApproved: (approved: number) => void
}