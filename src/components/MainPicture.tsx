import React from 'react'
import { Link } from 'react-router-dom'

import ButtonPrimary from '../components/ButtonPrimary'
import PictureContent from '../components/PictureContent'
import CardId from '../images/ID-bg.svg'
import { Props } from '../types'

const MainPicture: React.FC<Props> = ({ picture, setPicture, isApproved, setIsApproved }) => {
	if (picture !== undefined) {
		if (isApproved === 1) {
			return (
				<div className='main-pic-content'>
					<div className='border-approved'>
						<PictureContent>
							<img src={picture} style={{ height: '100%' }} alt='' />
							<Link to='/camera' className='link'></Link>
						</PictureContent>
					</div>
					<div className='main-alert alert-green'>
						<i className='fa-solid fa-check'></i>accepted
					</div>
				</div>
			)
		} else {
			console.log('isApproved in MainPicture --->', isApproved);
			// setIsApproved(0)
			return (
				<div className='main-pic-content'>
					<div className='border-rejected'>
						<PictureContent>
							<img className='main__content-img' src={picture} alt='' />
							<Link to='/camera' className='link main__content-btn' onClick={()=> setIsApproved(0)} >
								<ButtonPrimary>Retake Picture</ButtonPrimary>
							</Link>
						</PictureContent>
					</div>
					<div className='main-alert alert-red'>
						<i className='fa-solid fa-xmark'></i>rejected
					</div>
				</div>
			)
		}
	} else {
		return (
			<div className='card-id'>
				<div className=' card-id main-pic-content'>
					<PictureContent>
						<img src={CardId} className='main__content-card-img'alt='' />
						<Link to='/camera' className='link main__content-btn'>
							<ButtonPrimary>Take Picture</ButtonPrimary>
						</Link>
					</PictureContent>
				</div>
			</div>
		)
	}
}

export default MainPicture
