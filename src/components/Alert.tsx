import React from 'react'
interface Props {
	isApproved?: boolean
}

const Alert: React.FC<Props> = ({ isApproved }) => {

	switch (isApproved) {
		case true:
			return (
				<div className='alert'>
					<i className='fa-regular fa-circle-check' style={{ color: '#69CC8B' }}></i>Picture taken!
				</div>
			)

		case false:
			return <div className='alert'></div>

		default:
			return (
				<div className='alert'>
					<i className='fa-regular fa-lightbulb' style={{ color: '#FAB72D' }}></i>Room lighting is too low
				</div>
			)
	}
}

export default Alert
