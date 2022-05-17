import Header from '../components/Header'
import TextContent from '../components/TextContent'
import ButtonPrimary from '../components/ButtonPrimary'
import PictureContent from '../components/PictureContent'
import { Link } from 'react-router-dom'
import CardId from '../images/ID-bg.svg'

interface Props {
	picture?: string
	setPicture: (picture: string) => void
	isApproved?: boolean
	setIsApproved: (approved: boolean) => void;
}

const Main: React.FC<Props> = ({ picture, setPicture, isApproved, setIsApproved }) => {
	let mainPicture: JSX.Element = <></>

	console.log("picture in main", picture);

	if (picture !== undefined) {

		if (isApproved){
			mainPicture = (
				<div className='main-pic-content'>
					<div className='border-approved'>
						<PictureContent>
							<img src={picture} style={{ height: '100%' }} alt='' />
							<Link to='/camera' className='link'></Link>
						</PictureContent>
					</div>
					<div className='main-alert alert-green'>
						<i className="fa-solid fa-check"></i>accepted
					</div>
				</div>
			)
		}else{
			mainPicture = (
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
						<i className="fa-solid fa-xmark"></i>rejected
					</div>
				</div>
			)
		}
	} else {
		mainPicture = (
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

	const data = {
		title: 'Scan your ID',
		description: 'Take a picture. It may take time to validate your personal information.',
	}

	return (
		<div className='container'>
			<Header />
			<TextContent title={data.title} description={data.description}></TextContent>
			{mainPicture}
		</div>
	)
}

export default Main
