export interface Props {
	picture?: string
	setPicture: (picture: string) => void
	isApproved?: boolean
	setIsApproved: (approved: boolean) => void
}