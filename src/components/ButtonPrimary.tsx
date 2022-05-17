import React from 'react'

interface Props {
	children: React.ReactNode
}

const ButtonPrimary: React.FC<Props> = ({ children }: Props) => {
	return <div className='btn-primary'>{children}</div>
}

export default ButtonPrimary
