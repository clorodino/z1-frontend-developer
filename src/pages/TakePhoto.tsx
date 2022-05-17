import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import idImage from '../images/id-image.png'
import TakePhotoView from './TakePhotoView'
import { Props } from '../types'

const TakePhoto: React.FC<Props> = ({ picture, setPicture, isApproved, setIsApproved }) => {
	const history = useNavigate()

	const checkImage = () => {
		setTimeout(() => {
			fetch('https://front-exercise.z1.digital/evaluations', { method: 'POST' }) // Calling to Api
				.then(res => res.json())
				.then(json => {
					if (json.summary.outcome === 'Approved') {
						setIsApproved(true)
						setPicture(idImage)

						setTimeout(() => {
							history('/')
						}, 2000)
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
		<>
			<TakePhotoView picture={picture} setPicture={setPicture} isApproved={isApproved} setIsApproved={setIsApproved} />
		</>
	)
}

export default TakePhoto
