import Header from '../components/Header'
import TextContent from '../components/TextContent'
import ButtonPrimary from '../components/ButtonPrimary'
import PictureContent from '../components/PictureContent'
import { Link } from 'react-router-dom'

const Main = () => {
	return (
		<div className='container'>
			<Header />
			<TextContent />
			<PictureContent>
				<Link to='/camera' className='link'>
					<ButtonPrimary>
						Take Picture
					</ButtonPrimary>
				</Link>	
			</PictureContent>
		</div>
	)
}

export default Main
