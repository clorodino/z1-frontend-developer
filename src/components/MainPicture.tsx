import React from 'react'
import { Link } from 'react-router-dom'

import ButtonPrimary from '../components/ButtonPrimary'
import PictureContent from '../components/PictureContent'
import CardId from '../images/ID-bg.svg'
import { Props } from '../types'

const MainPicture: React.FC<Props> = ({ picture, setPicture, isApproved, setIsApproved }) => {
	if (picture !== undefined) {
		if (isApproved) {
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
			return (
				<div className='main-pic-content'>
					<div className='border-rejected'>
						<PictureContent>
							<img src={picture} style={{ height: '100%', position: 'absolute' }} alt='' />
							<Link to='/camera' className='link' style={{ position: 'relative' }}>
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
				<div className='card-id' style={{ position: 'relative' }}>
					<PictureContent>
						<img src={CardId} style={{ height: '80%', position: 'absolute', top: '0.9375rem' }} alt='' />
						<Link to='/camera' className='link' style={{ position: 'relative' }}>
							<ButtonPrimary>Take Picture</ButtonPrimary>
						</Link>
					</PictureContent>
				</div>
			</div>
		)
	}
}

export default MainPicture
