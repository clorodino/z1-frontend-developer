import React from 'react'
interface Props {
  children: React.ReactNode
}

const PictureContent: React.FC<Props> = ({children}) => {
  return (
    <div className='pic-content'>{children}</div>
  )
}

export default PictureContent