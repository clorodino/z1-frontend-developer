
import Header from '../components/Header'
import TextContent from '../components/TextContent'
import MainPicture from '../components/MainPicture'
import { Props } from '../types'

const Main: React.FC<Props> = ({ picture, setPicture, isApproved, setIsApproved }) => {

	const data = {
		title: 'Scan your ID',
		description: 'Take a picture. It may take time to validate your personal information.',
	}

	return (
		<div className='container'>
			<Header />
			<TextContent title={data.title} description={data.description}></TextContent>
			<MainPicture 
				picture={picture}
				setPicture={setPicture}
				isApproved={isApproved}
				setIsApproved={setIsApproved}
			/>
		</div>
	)
}

export default Main
