import React from 'react'

interface Props {
	isApproved?: boolean
}

const Alert: React.FC<Props> = ({ isApproved }) => {
	switch (isApproved) {
		case true:
			return (
				<div className='alert'>
					<i className='fa-regular fa-circle-check color-approved'></i>Picture taken!
				</div>
			)

		case false:
			return <div className='alert'></div>

		default:
			return (
				<div className='alert'>
					<i className='fa-regular fa-lightbulb color-warning'></i>Room lighting is too low
				</div>
			)
	}
}

export default Alert
