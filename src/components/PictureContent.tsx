import React from 'react'
interface Props {
	children: React.ReactNode
	isApproved?: boolean
}

const PictureContent: React.FC<Props> = ({ children, isApproved }) => {

	switch (isApproved) {
		case true:
			return <div className='pic-content border-approved'>{children}</div>

		case false:
			return <div className='pic-content border-rejected'>{children}</div>

		default:
			return <div className='pic-content'>{children}</div>
	}
}

export default PictureContent
