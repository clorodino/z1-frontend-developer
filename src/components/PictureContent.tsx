import React from 'react'

interface Props {
	children: React.ReactNode
	isApproved?: number
}

const PictureContent: React.FC<Props> = ({ children, isApproved }) => {
	switch (isApproved) {
		case 1:
			return <div className='pic-content border-approved'>{children}</div>

		case 2:
			return <div className='pic-content border-rejected'>{children}</div>

		default:
			return <div className='pic-content border-warning'>{children}</div>
	}
}

export default PictureContent
