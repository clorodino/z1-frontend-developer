import { useEffect } from 'react'
import TextContent from '../components/TextContent'
import ButtonLink from '../components/ButtonLink'
import PictureContent from '../components/PictureContent'
import Alert from '../components/Alert'
import { Link, useNavigate } from 'react-router-dom'
import bgImage from '../images/background-without-ID.jpg'
import idImage from '../images/id-image.png'

interface Props{
	picture?: string
	setPicture: (picture: string) => void;
	isApproved?: boolean
	setIsApproved: (approved: boolean) => void;
}

const TakePhoto: React.FC<Props> = ({picture, setPicture, isApproved, setIsApproved}) => {

	const data = {
		title: 'Take picture',
		description: `Fit your ID card inside the frame.
The picture will be taken automatically.`,
	}

	const history = useNavigate();

	const checkImage = () => {
		setTimeout(() => {
	
			fetch('https://front-exercise.z1.digital/evaluations', {method: "POST"}) // Calling to Api
			.then((res) => res.json())
			.then((json)=>{
				if (json.summary.outcome === 'Approved') {
					setIsApproved(true)
					setPicture(idImage)
					
					setTimeout(()=>{
						history('/')
					},2000)

				} else {
					setIsApproved(false)
					setPicture(idImage)
				}
			})
		}, 2000)
	}
	
	useEffect(() => {
		checkImage()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	return (
		<div className='container camera'>
			<div className='content'>
				<div className='bg filter' style={{ backgroundImage: `url(${bgImage})` }}></div>
				<div className='content-info'>
					<TextContent title={data.title} description={data.description} />
					
					<PictureContent isApproved={isApproved}>
						<img src={idImage} style={{ height: '100%', position: 'relative' }} alt='' />
					</PictureContent>
						<Alert isApproved={isApproved}/>
					<Link to='/' className='link'>
						<ButtonLink>Cancel</ButtonLink>
					</Link>

				</div>
			</div>
		</div>
	)
}

export default TakePhoto
