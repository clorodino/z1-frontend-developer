import React from 'react'
import { Link } from 'react-router-dom'

import TextContent from '../components/TextContent'
import ButtonLink from '../components/ButtonLink'
import PictureContent from '../components/PictureContent'
import Alert from '../components/Alert'
import bgImage from '../images/background-without-ID.jpg'
import idImage from '../images/id-image.png'
import { Props } from '../types'

const TakePhotoView: React.FC<Props> = ({ picture, setPicture, isApproved, setIsApproved }) => {
	const data = {
		title: 'Take picture',
		description: `Fit your ID card inside the frame.
The picture will be taken automatically.`,
	}

	return (
		<div className='container camera'>
			<div className='content'>
				<div className='bg filter' style={{ backgroundImage: `url(${bgImage})` }}></div>
				<div className='content-info'>
					<TextContent title={data.title} description={data.description} />
					<PictureContent isApproved={isApproved}>
						<img src={idImage} style={{ height: '100%', position: 'relative' }} alt='' />
					</PictureContent>
					<Alert isApproved={isApproved} />
					<Link to='/' className='link'>
						<ButtonLink>Cancel</ButtonLink>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TakePhotoView
