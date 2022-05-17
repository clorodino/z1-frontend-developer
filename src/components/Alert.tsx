import React from 'react'

interface Props {
	isApproved?: number
}

const Alert: React.FC<Props> = ({ isApproved }) => {
	switch (isApproved) {
		case 1:
			return (
				<div className='alert'>
					<i className='fa-regular fa-circle-check color-approved'></i>Picture taken!
				</div>
			)

		case 2:
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
