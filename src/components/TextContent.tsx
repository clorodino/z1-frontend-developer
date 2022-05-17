import React from 'react'

interface Props {
	children?: React.ReactNode
	title: string
	description: string
}

const TextContent: React.FC<Props> = ({ children, title, description }) => {
	return (
		<div className='text-content'>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}

export default TextContent
