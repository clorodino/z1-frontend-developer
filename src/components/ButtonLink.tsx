import React from 'react'

interface Props {
    children: React.ReactNode
  }

const ButtonLink: React.FC<Props> = ({children}:Props) => {
  return (
    <div className='btn-link'>{children}</div>
  )
}

export default ButtonLink