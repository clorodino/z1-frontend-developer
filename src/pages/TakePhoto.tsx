import TextContent from '../components/TextContent'
import ButtonLink from '../components/ButtonLink'
import PictureContent from '../components/PictureContent'
import Alert from '../components/Alert'
import { Link } from 'react-router-dom'

const TakePhoto = () => {
	return (
		<div className='container'>
			<TextContent />
			<PictureContent>
      </PictureContent>
			<Alert />
			<Link to='/' className='link'>
				<ButtonLink>Cancel</ButtonLink>
			</Link>
		</div>
	)
}

export default TakePhoto
